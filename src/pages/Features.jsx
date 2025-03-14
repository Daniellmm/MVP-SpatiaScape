import React from 'react'
import { Upload, Code, Layers, Paintbrush, Users, BarChart3 } from 'lucide-react';


const Features = () => {
  return (
    <div className=" bg-gradient-to-b from-white to-blue-300 text-white">
      {/* Hero Section */}
      

      {/* Key Features Overview */}
      <section className="py-44 px-4 md:px-8 lg:px-16  backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">Why Choose SpatiaScape?</h2>
            <div className="w-24 h-1 bg-[linear-gradient(to_top,#4481eb_0%,#04befe_100%)] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-white/5 shadow-xl hover:shadow-blue-500/5 transition group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition">
                <Upload className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Seamless 3D Uploads</h3>
              <p className="text-slate-400">Upload models in popular formats like .glb, .gltf, .obj, and more.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-white/5 shadow-xl hover:shadow-blue-500/5 transition group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Embeddable 3D Viewer</h3>
              <p className="text-slate-400">Easily embed 3D models on your website with a single line of code.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-white/5 shadow-xl hover:shadow-blue-500/5 transition group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition">
                <Layers className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">VR/AR Previews</h3>
              <p className="text-slate-400">View your models in virtual and augmented reality.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-white/5 shadow-xl hover:shadow-blue-500/5 transition group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition">
                <Paintbrush className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Customization</h3>
              <p className="text-slate-400">Add custom branding, logos, and colors to the viewer.</p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-white/5 shadow-xl hover:shadow-blue-500/5 transition group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Supported by Favourite Tool</h3>
              <p className="text-slate-400">Share models with your team and collaborate in real-time.</p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-white/5 shadow-xl hover:shadow-blue-500/5 transition group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition">
                <BarChart3 className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Insights</h3>
              <p className="text-slate-400">Track views, interactions, and engagement with your models.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features