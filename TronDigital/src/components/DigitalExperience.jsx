import React, { useState } from "react";
import { Play, Pause } from "lucide-react";

export default function DigitalExperience() {
  const [playingVideo, setPlayingVideo] = useState(null);

  const stats = [
    {
      number: "300+",
      description: "Digital projects we've conducted across industries",
    },
    {
      number: "1000+",
      description:
        "Diverse in-house team members that are a part of Vector and its family of capabilities",
    },
    {
      number: "500+",
      description: "Ecosystem partners that provide ongoing access to cutting-edge capabilities",
    },
  ];

  const companies = [
    {
      name: "Netflix",
      logo: "NETFLIX",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnail: "/api/placeholder/280/300",
    },
    {
      name: "Adobe",
      logo: "🅰️ Adobe",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      thumbnail: "/api/placeholder/280/300",
    },
    {
      name: "Slack",
      logo: "🔷 slack",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
      thumbnail: "/api/placeholder/280/300",
    },
    {
      name: "Booking.com",
      logo: "Booking.com",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_7mb.mp4",
      thumbnail: "/api/placeholder/280/300",
    },
  ];

  const handlePlayVideo = (index) => {
    if (playingVideo === index) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(index);
    }
  };

  return (
    <div className="bg-black  p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-white text-3xl md:text-4xl font-light text-center mb-16">
          Digital Experience and Impact
        </h2>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-purple-400">
                {stat.number}
              </div>
              <p className="text-white text-sm md:text-base leading-relaxed px-4">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {companies.map((company, index) => (
            <div key={index} className="relative group">
              {/* Company Logo */}
              <div className="text-white text-lg font-bold mb-16 text-center">
                {company.name === "Netflix" && (
                  <span className="text-red-600 font-bold tracking-wider text-xl">NETFLIX</span>
                )}
                {company.name === "Adobe" && (
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-red-600 font-bold text-xl">A</span>
                    <span>Adobe</span>
                  </span>
                )}
                {company.name === "Slack" && (
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-blue-400 text-xl">#</span>
                    <span>slack</span>
                  </span>
                )}
                {company.name === "Booking.com" && (
                  <span className="text-blue-500 font-bold">Booking.com</span>
                )}
              </div>

              {/* Video Card Container with Border */}
              <div className="relative p-4 rounded-3xl border-2 border-gray-700/50 bg-gray-800/20 backdrop-blur-sm group-hover:border-purple-400/50 transition-all duration-300">
                {/* Video Card */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  {playingVideo === index ? (
                    /* Actual Video Player */
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      onEnded={() => setPlayingVideo(null)}
                      onPause={() => setPlayingVideo(null)}
                    >
                      <source src={company.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    /* Video Thumbnail/Preview */
                    <div className="relative w-full h-full">
                      {/* Background gradient simulating video preview */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900">
                        {/* Simulated person in office */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-40"></div>
                        </div>

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={() => handlePlayVideo(index)}
                          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 border border-white/20"
                        >
                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </button>
                      </div>

                      {/* Watch Video Label */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm opacity-80">
                        <Play className="w-4 h-4" />
                        <span>Watch video</span>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-white/30"></div>
                      <div className="absolute top-12 right-8 w-1 h-1 rounded-full bg-white/20"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
