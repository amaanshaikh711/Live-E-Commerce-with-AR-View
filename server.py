import http.server
import socketserver
from http.server import SimpleHTTPRequestHandler

class NoCacheHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add headers to prevent caching
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Attributes-To-Allow-AR', 'true')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def guess_type(self, path):
        # Ensure correct MIME types for 3D models
        if path.endswith(".glb"):
            return "model/gltf-binary"
        if path.endswith(".usdz"):
            return "model/vnd.usdz+zip"
        return super().guess_type(path)

PORT = 8080

with socketserver.TCPServer(("0.0.0.0", PORT), NoCacheHTTPRequestHandler) as httpd:
    print(f"✅ Server running at http://0.0.0.0:{PORT}/")
    print(f"📱 Access on your phone: http://192.168.1.6:{PORT}/")
    print(f"⚠️  IMPORTANT FOR AR: WebXR requires a Secure Context (HTTPS) or 'localhost'.")
    print(f"   - If accessing via IP (192.168...), AR might fail (Black Screen) or fallback to SceneViewer.")
    print(f"   - BEST: Connect phone via USB, use Chrome 'Port Forwarding' to forward {PORT} to localhost:{PORT}, open http://localhost:{PORT} on phone.")
    print(f"   - OR: Use ngrok (e.g., 'ngrok http {PORT}').")
    print(f"🚫 Cache disabled - you'll always get the latest files")
    print("Press Ctrl+C to stop the server")
    httpd.serve_forever()
