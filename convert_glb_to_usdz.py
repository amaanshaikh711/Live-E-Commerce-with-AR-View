"""
GLB to USDZ Converter
Converts all GLB models to USDZ format for iOS AR support
Uses online conversion via Reality Converter approach
"""

import os
import glob

def list_glb_files():
    """List all GLB files that need conversion"""
    models_dir = "models"
    glb_files = glob.glob(os.path.join(models_dir, "*.glb"))
    
    print("=" * 70)
    print("GLB TO USDZ CONVERSION GUIDE")
    print("=" * 70)
    print(f"\nFound {len(glb_files)} GLB files to convert:\n")
    
    for i, glb_file in enumerate(glb_files, 1):
        base_name = os.path.splitext(os.path.basename(glb_file))[0]
        usdz_file = os.path.join(models_dir, f"{base_name}.usdz")
        
        print(f"{i}. {os.path.basename(glb_file)}")
        print(f"   → {os.path.basename(usdz_file)}")
        print()
    
    print("=" * 70)
    print("CONVERSION OPTIONS:")
    print("=" * 70)
    print("\n🔧 OPTION 1: Use Reality Converter (Mac Only - RECOMMENDED)")
    print("   1. Download Reality Converter from Apple Developer")
    print("   2. Drag and drop each GLB file into the app")
    print("   3. Export as USDZ")
    print("   4. Save to the 'models' folder")
    
    print("\n🌐 OPTION 2: Use Online Converter (Any OS)")
    print("   Recommended: https://products.aspose.app/3d/conversion/glb-to-usdz")
    print("   Alternative: https://www.meshy.ai/convert")
    print("   Alternative: https://www.convert3d.org/glb-to-usdz")
    
    print("\n   Steps:")
    print("   1. Visit one of the converter URLs above")
    print("   2. Upload each GLB file from the 'models' folder")
    print("   3. Download the converted USDZ file")
    print("   4. Save to 'models' folder with same name (but .usdz extension)")
    
    print("\n💡 OPTION 3: Use Python usd-core (Advanced)")
    print("   This requires installing Pixar's USD library")
    print("   Run: pip install usd-core")
    print("   Then use USD tools to convert")
    
    print("\n" + "=" * 70)
    print("QUICK START - ONLINE CONVERSION:")
    print("=" * 70)
    print("\nVisit: https://products.aspose.app/3d/conversion/glb-to-usdz")
    print("\nFor each file listed above:")
    for i, glb_file in enumerate(glb_files, 1):
        print(f"  {i}. Upload: {os.path.basename(glb_file)}")
    
    print("\nDownload all USDZ files to the 'models' folder")
    print("\n" + "=" * 70)

if __name__ == "__main__":
    list_glb_files()
