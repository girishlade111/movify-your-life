"use client"

import { useEffect, useRef } from "react"

interface WebWorkerManagerProps {
  onReady?: () => void
}

export default function WebWorkerManager({ onReady }: WebWorkerManagerProps) {
  const workerRef = useRef<Worker | null>(null)

  useEffect(() => {
    // Only create worker if supported and needed
    if (typeof Worker !== "undefined" && !workerRef.current) {
      try {
        // Create inline worker to avoid external file dependency
        const workerCode = `
          // Background tasks that don't block main thread
          self.onmessage = function(e) {
            const { type, data } = e.data;
            
            switch(type) {
              case 'PRELOAD_IMAGES':
                // Preload images in background
                data.forEach(src => {
                  const img = new Image();
                  img.src = src;
                });
                self.postMessage({ type: 'IMAGES_PRELOADED' });
                break;
                
              case 'ANALYTICS_BATCH':
                // Process analytics data without blocking UI
                setTimeout(() => {
                  self.postMessage({ type: 'ANALYTICS_PROCESSED', data });
                }, 100);
                break;
                
              default:
                break;
            }
          }
        `

        const blob = new Blob([workerCode], { type: "application/javascript" })
        workerRef.current = new Worker(URL.createObjectURL(blob))

        workerRef.current.onmessage = (e) => {
          // Handle worker responses without blocking main thread
          if ("requestIdleCallback" in window) {
            requestIdleCallback(() => {
              console.log("Worker completed:", e.data.type)
            })
          }
        }

        onReady?.()
      } catch (error) {
        console.warn("Web Worker not supported:", error)
      }
    }

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate()
        workerRef.current = null
      }
    }
  }, [onReady])

  // This component doesn't render anything, it just manages the worker
  return null
}
