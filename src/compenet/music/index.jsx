import React from "react";

export default function Music() {
  return (
    <div>
      
            <div class="lagu" id="lagu">
              <div class="container">
                <audio controls autoplay>
                  <source src="/lg.mp3" type="audio/mpeg" />
                </audio>
              </div>
            </div>
            
    </div>
  );
}
