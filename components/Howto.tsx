import React from "react";

function Howto() {
  return (
    <div className="w-full max-x-[1440px]  flex justify-center items-start mx-auto px-8 py-16">
      <div className="left mr-16 relative w-[600px] max-w-[50%]">
        <img src="/feature.webp" alt="feature" />
      </div>
      <div className="right w-[640px] flex flex-col border-2 rounded-lg p-8">
        <h2 className="font-semibold text-4xl mb-8"></h2>
        <ol className="flex flex-col ">
          <li className="mb-8 text-base font-normal">
            <h3 className="font-semibold text-2xl">1. Upload your file.</h3>
            <p>
              With our uploader, you can import your file from anywhere, whether it's on your
              laptop, Google Drive, Youtube, or Dropbox.
            </p>
          </li>
          <li className="mb-8 text-base font-normal">
            <h3 className="font-semibold text-2xl">2. Select "French".</h3>
            <p>Determine the language of the audio of your video.</p>
          </li>
          <li className="mb-8 text-base font-normal">
            <h3 className="font-semibold text-2xl">3. Select "Human made".</h3>
            <p>
              With our Human-Made service, the original (French) subtitles will be created by a
              native subtitler and proofread by an experienced reviewer.
            </p>
          </li>
          <li className="mb-8 text-base font-normal">
            <h3 className="font-semibold text-2xl">
              4. Toggle "Translate subtitles to another language".
            </h3>
            <p>
              Select "English" to determine the target language for the subtitle translation
              process.
            </p>
          </li>
          <li className="mb-8 text-base font-normal">
            <h3 className="font-semibold text-2xl">
              5. Get notified when your French and English subtitles are ready.
            </h3>
            <p>
              Receive an email when the subtitles have been created within 24 hours for the French
              subtitles and 3-5 days for English subtitles.
            </p>
          </li>
          <li className="mb-8 text-base font-normal">
            <h3 className="font-semibold text-2xl">6. Receive your subtitles.</h3>
            <p>Access your subtitles from the dashboard.</p>
          </li>
          <li className="mb-8 text-base font-normal">
            <h3 className="font-semibold text-2xl">
              7. Click on "Export" and choose your preferred file format.
            </h3>
            <p>
              You can export to SRT, VTT, and many more. It's that easy to have your video
              professionally subtitled!.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Howto;
