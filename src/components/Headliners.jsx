import React from "react";

export const Headliners = () => {
  return (
    <section id="headliners">
      <div className="max-w-screen-lg mx-auto mt-20 px-4">
        <h2 className="text-5xl font-bold text-left">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-500">
            Headliners
          </span>
        </h2>
        <p className="text-zinc-300 text-justify mt-2">
          Get ready for an unforgettable musical journey featuring some of the
          most innovative and influential artists of our time. From indie rock
          pioneers to electronic music visionaries, our headliners represent the
          cutting edge of contemporary music. Each performance promises to be a
          unique experience, showcasing the artists' latest works and greatest
          hits in spectacular live settings. Join us for a week of extraordinary
          music, where every night brings a new story to life through sound.
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="w-full">
            <div className="flex-1 mt-4 flex w-full gap-4 pb-5 snap-x overflow-x-auto smooth-scroll">
              <div className="min-w-[280px] max-w-[40%] md:min-w-[40%] flex-shrink-0">
                <div className="bg-[url('/src/assets/images/band1.jpg')] h-80 w-full snap-center rounded-xl bg-cover shadow-md shadow-black/20"></div>
                <h5 className="mt-2 text-xl font-bold text-white">
                  Arctic Monkeys
                </h5>
                <p className="text-sm text-gray-300">
                  British indie rock band known for their distinctive sound and
                  poetic lyrics. Their latest album explores new sonic
                  territories.
                </p>
                <h6 className="text-sm text-gray-300 mt-1">
                  1st May 2025 - 9pm - Main Stage
                </h6>
              </div>
              <div className="min-w-[280px] max-w-[40%] md:min-w-[40%] flex-shrink-0">
                <div className="bg-[url('/src/assets/images/band2.jpg')] h-80 w-full snap-center rounded-xl bg-cover shadow-md shadow-black/20"></div>
                <h5 className="mt-2 text-xl font-bold text-white">
                  Tame Impala
                </h5>
                <p className="text-sm text-gray-300">
                  Australian psychedelic music project led by Kevin Parker.
                  Their dreamy soundscapes and innovative production have
                  redefined modern psychedelia.
                </p>
                <h6 className="text-sm text-gray-300 mt-1">
                  2nd May 2025 - 8pm - Main Stage
                </h6>
              </div>
              <div className="min-w-[280px] max-w-[40%] md:min-w-[40%] flex-shrink-0">
                <div className="bg-[url('/src/assets/images/band3.jpg')] h-80 w-full snap-center rounded-xl bg-cover shadow-md shadow-black/20"></div>
                <h5 className="mt-2 text-xl font-bold text-white">
                  The Strokes
                </h5>
                <p className="text-sm text-gray-300">
                  New York City's garage rock revivalists who defined the sound
                  of the early 2000s. Their raw energy and catchy riffs continue
                  to captivate audiences.
                </p>
                <h6 className="text-sm text-gray-300 mt-1">
                  3rd May 2025 - 9:30pm - Main Stage
                </h6>
              </div>
              <div className="min-w-[280px] max-w-[40%] md:min-w-[40%] flex-shrink-0">
                <div className="bg-[url('/src/assets/images/band4.jpg')] h-80 w-full snap-center rounded-xl bg-cover shadow-md shadow-black/20"></div>
                <h5 className="mt-2 text-xl font-bold text-white">
                  Glass Animals
                </h5>
                <p className="text-sm text-gray-300">
                  British indie pop band known for their unique blend of
                  electronic and organic sounds. Their tropical pop style
                  creates an immersive live experience.
                </p>
                <h6 className="text-sm text-gray-300 mt-1">
                  4th May 2025 - 7pm - Electronic Stage
                </h6>
              </div>
              <div className="min-w-[280px] max-w-[40%] md:min-w-[40%] flex-shrink-0">
                <div className="bg-[url('/src/assets/images/band5.jpg')] h-80 w-full snap-center rounded-xl bg-cover shadow-md shadow-black/20"></div>
                <h5 className="mt-2 text-xl font-bold text-white">
                  Vampire Weekend
                </h5>
                <p className="text-sm text-gray-300">
                  Indie rock band blending African rhythms with Western pop
                  sensibilities. Their sophisticated songwriting and eclectic
                  influences create a unique sound.
                </p>
                <h6 className="text-sm text-gray-300 mt-1">
                  5th May 2025 - 8:30pm - Main Stage
                </h6>
              </div>
              <div className="min-w-[280px] max-w-[40%] md:min-w-[40%] flex-shrink-0">
                <div className="bg-[url('/src/assets/images/band6.jpg')] h-80 w-full snap-center rounded-xl bg-cover shadow-md shadow-black/20"></div>
                <h5 className="mt-2 text-xl font-bold text-white">Alt-J</h5>
                <p className="text-sm text-gray-300">
                  British indie rock band known for their experimental sound and
                  intricate harmonies. Their innovative approach to music has
                  earned them critical acclaim.
                </p>
                <h6 className="text-sm text-gray-300 mt-1">
                  6th May 2025 - 9pm - Alternative Stage
                </h6>
              </div>
              <div className="min-w-[280px] max-w-[40%] md:min-w-[40%] flex-shrink-0">
                <div className="bg-[url('/src/assets/images/band7.jpg')] h-80 w-full snap-center rounded-xl bg-cover shadow-md shadow-black/20"></div>
                <h5 className="mt-2 text-xl font-bold text-white">The 1975</h5>
                <p className="text-sm text-gray-300">
                  British pop rock band known for their genre-blending sound and
                  thought-provoking lyrics. Their dynamic performances are a
                  must-see live experience.
                </p>
                <h6 className="text-sm text-gray-300 mt-1">
                  7th May 2025 - 10pm - Main Stage
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
