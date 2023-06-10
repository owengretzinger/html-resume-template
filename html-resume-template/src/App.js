import "./index.css";

export default function App() {
  return (
    <div className="max-w-full min-h-screen text-black bg-blue-200 px-4 print:px-0 py-10 print:py-0">
      {/* <-- resume page */}
      <div className="w-full sm:max-w-[52rem] lg:aspect-[8.5/11] bg-white rounded-3xl shadow-xl mx-auto
                      print:w-[52rem] print:h-[100vh] print:aspect-[8.5/11] print:rounded-none print:shadow-none">
        <div className="w-full h-full flex flex-col p-4 md:p-16 print:p-16">
          {/* <-- desktop header */}
          <div className="w-full hidden sm:flex print:flex justify-between items-center">
            <h2 className="flex-1 text-4xl font-[1000]">First Name<br />Last Name</h2>
            <p>[optional headshot]</p>
            <div className="flex-1 flex sm:justify-end print:justify-end">
              <div className="flex flex-col w-fit sm:items-end print:items-end gap-[2px]">
                <p>Links here</p>
                <p>Or phone number, etc.</p>
                <p>Whatever you want :)</p>
              </div>
            </div>
          </div>
          {/* desktop header --> */}
          {/* <-- mobile header */}
          <div className="sm:hidden print:hidden">
            <div className="flex w-full max-w-full justify-between items-center gap-3">
              <h2 className="text-3xl [@media(min-width:400px)]:text-4xl font-[1000]">First Name<br />Last Name</h2>
              <div>
                <p>[optional headshot]</p>
              </div>
            </div>
          </div>
          {/* mobile header --> */}

          {/* gap between header and body */}
          <span className="mb-12" />

          {/* <-- body */}
          <div className="w-full h-full flex flex-col sm:flex-row print:flex-row gap-4">
            {/* <-- left column */}
            <div className="flex-1 flex flex-col gap-4 bg-blue-50">
              {/* <-- links shown on mobile only */}
              <div className="sm:hidden print:hidden">
                <p>Links here</p>
                <p>Or phone number, etc.</p>
                <p>Whatever you want :)</p>
              </div>
              {/* links shown on mobile only --> */}

              <p>First column</p>
              <p className="text-2xl my-12">...</p>
              <p>You can see how it looks on mobile (or other screen sizes) using inspect element, and how it looks when you export to pdf by doing Ctrl+P or Cmd+P!</p>
              <p>If these light blue column boxes don't show up when you go to print and you're curious why, you have to go to "More settings" and check the "Background graphics" box.</p>
            </div>
            {/* left column --> */}

            {/* <-- right column */}
            <div className="flex-1 flex flex-col gap-4 bg-blue-50">
              <p>Second column</p>
              <p className="text-2xl my-12">...</p>
              <p>Provided by <Link href="https://owengretzinger.com">Owen Gretzinger</Link> :) I would love to connect with you on <Link href="https://linkedin/com/in/owengretzinger">LinkedIn</Link>!</p>
              <p>Check out <Link href="https://owengretzinger.com/resume">my resume</Link> (I created this template to share how I made it) and see <Link href="https://owengretzinger.com/articles/html-resume">the article I wrote about it</Link> if that isn't where you came from already!</p>
              <p className="my-36">...</p>
              <p>More content</p>
            </div>
            {/* right column --> */}
          </div>
          {/* body --> */}
        </div>
      </div>
      {/* resume page --> */}
    </div>
  )
}

function Link({ ...props }) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{props.children}</a>
  )
}