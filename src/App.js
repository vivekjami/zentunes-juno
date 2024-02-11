import { Background } from "./Background";
import { Table } from "./Table";
import { Modal } from "./Modal";
import { initJuno } from "@junobuild/core";
import { Auth } from "./Auth";
import { useEffect } from "react";
import logo from "./ZEN_TUNES.jpeg";


function App() {
  // TODO: STEP_1_INITIALIZATION
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: "gryxe-7yaaa-aaaal-adsnq-cai",
      }))();
  }, []);

  return (
    <>
      <div className="isolate bg-white ">
        <main>
          <div className="relative px-6 lg:px-8" >
            <div className="mx-auto max-w-2xl pt-16">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" >
                <img src={logo} alt="ZEN TUNES" className="mx-auto mt-4" />
                </h1>
                <p className="mt-6 text-sm leading-8 text-gray-600">
                  A sample virtual study environment app build with React, Tailwind and{" "}
                  <a
                    href="https://juno.build"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline"
                  >Juno
                  </a>
                  .
                </p>
                <div className="mx-auto mt-4">                
                  <iframe
        title="Background audio"
        src={`https://www.youtube.com/embed/VIDEO_ID?autoplay=1&controls=0&loop=100&playlist=jfKfPfyJRdk&start=0&end=0&vq=small&fs=0&cc_load_policy=0&iv_load_policy=3&autohide=0&disablekb=1&enablejsapi=1&origin=https://oc.app&widgetid=1`}
        allow="autoplay"
        style={{ display: "none" }}
      ></iframe>
                </div>
                <Auth>
                  <Table />
                  <div className="flex justify-center mt-4">
        <button onClick="https://oc.app/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
        <a          href="https://oc.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline"
              
                  >Openchat</a>
        </button>
        <button onClick="" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
       
        <a          href="https://dscvr.one/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline"
                  
                  > DSCVR</a>
        </button></div>
                  <Modal />
                </Auth>
              </div>
            </div>
            <Background />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
