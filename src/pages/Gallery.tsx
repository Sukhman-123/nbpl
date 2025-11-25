import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});

  // Convert Google Drive links to direct image URLs
  const galleryImages = [
    {
      id: "1LLzodCPMRs_TLRZdt3D5A_fkqWK-yjD8",
      category: "Match Highlights",
      title: "Action Shot 1"
    },
    {
      id: "1NzqZBF6ZL2rVo-f-0zMAUG0rZavQy9KB",
      category: "Match Highlights",
      title: "Action Shot 2"
    },
    {
      id: "1vLMEDgC-p2i_h9qy5nBwFgkvgOEM2AUh",
      category: "Team Photos",
      title: "Team Portrait 1"
    },
    {
      id: "1xUjtyqQMEN3iQ7v0QiHZ77w3p1YcMM37",
      category: "Team Photos",
      title: "Team Portrait 2"
    },
    {
      id: "15kg8DD4k-P4q6K5_nHCli2FaC1uMdLie",
      category: "Celebrations",
      title: "Victory Moment 1"
    },
    {
      id: "1BYrRN2TGU04JRK_A_yrBvy3hcH8wOiqG",
      category: "Celebrations",
      title: "Victory Moment 2"
    },
    {
      id: "1MVO3gx9AMMKSiH66zvE58DL63Zt7fpOG",
      category: "Match Highlights",
      title: "Action Shot 3"
    },
    {
      id: "1_C8K2meLwMrGwXkN49dvTwcppWlD3EgW",
      category: "Team Photos",
      title: "Team Portrait 3"
    },
    {
      id: "1imvlTlNeVCpad4gQfHXTIzNOkHif33R4",
      category: "Match Highlights",
      title: "Action Shot 4"
    },
    {
      id: "1uYdBCSG9wxwr3FBaj4iJKiwnfnOMui6a",
      category: "Celebrations",
      title: "Victory Moment 3"
    },
    {
      id: "1vC9wXPK4ROXMflo8CvS2OfZMrJ_97wlU",
      category: "Match Highlights",
      title: "Action Shot 5"
    }
  ].map(img => ({
    ...img,
    url: `https://drive.google.com/thumbnail?id=${img.id}&sz=w1000`
  }));

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Gallery
        </h1>
        <p className="text-center text-muted-foreground mb-12 animate-fade-in-delay">
          Relive the best moments from NBPL
        </p>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3] bg-muted relative">
                  {!imageLoaded[image.id] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-cricket-blue border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    src={image.url}
                    alt={image.title}
                    className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${
                      imageLoaded[image.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(prev => ({ ...prev, [image.id]: true }))}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage Unavailable%3C/text%3E%3C/svg%3E';
                      setImageLoaded(prev => ({ ...prev, [image.id]: true }));
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium text-cricket-blue">{image.category}</p>
                      <p className="text-lg font-bold">{image.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-cricket-blue transition-colors p-2 z-50"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-cricket-blue transition-colors p-2 z-50"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-cricket-blue transition-colors p-2 z-50"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="max-w-6xl max-h-[90vh] mx-auto px-4">
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg animate-scale-in"
            />
            <div className="text-center mt-4 text-white">
              <p className="text-sm text-cricket-blue">{galleryImages[selectedImage].category}</p>
              <p className="text-xl font-bold">{galleryImages[selectedImage].title}</p>
              <p className="text-sm text-muted-foreground mt-2">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-card py-8 border-t border-border mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Narsingh Bandh Premier League. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
