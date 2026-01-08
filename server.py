import http.server
import socketserver
from http.server import SimpleHTTPRequestHandler

class NoCacheHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Configure caching based on file type
        if self.path.endswith(('.glb', '.usdz', '.jpg', '.jpeg', '.png', '.js', '.css')):
            # Cache large assets for 1 hour to prevent constant re-downloading (Buffering)
            self.send_header('Cache-Control', 'public, max-age=3600')
        else:
            # Keep HTML pages fresh
            self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        
        self.send_header('Attributes-To-Allow-AR', 'true')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def guess_type(self, path):
        # Ensure correct MIME types for 3D models and source module
        if path.endswith(".glb"):
            return "model/gltf-binary"
        if path.endswith(".usdz"):
            return "model/vnd.usdz+zip"
        if path.endswith(".js"):
            return "application/javascript"
        return super().guess_type(path)

PORT = 8080

with socketserver.TCPServer(("0.0.0.0", PORT), NoCacheHTTPRequestHandler) as httpd:
    import socket
    hostname = socket.gethostname()
    try:
        ip_address = socket.gethostbyname(hostname)
    except:
        ip_address = '192.168.1.X'

    print("=" * 70)
    print("🚀 LUSSO HOMES SERVER RUNNING!")
    print("=" * 70)
    print(f"\n💻 On this computer: http://localhost:{PORT}/")
    print(f"📱 On your phone: http://{ip_address}:{PORT}/")
    print("\n" + "=" * 70)
    print("📋 HOW TO ACCESS ON YOUR PHONE:")
    print("=" * 70)
    print("1. Phone MUST be on SAME WiFi as this computer")
    print("2. If AR fails to load, check Windows Firewall settings to allow python")
    print(f"3. Type this URL: http://{ip_address}:{PORT}/")
    print("\n⚠️  ANDROID AR NOTE: If 'View in Your Room' fails:")
    print("   Open chrome://flags on your phone, search 'insecure origins',")
    print(f"   enable it, and add 'http://{ip_address}:{PORT}'")
    print("\n🚫 Cache disabled - you'll always get the latest files")
    print("=" * 70)
    httpd.serve_forever()
