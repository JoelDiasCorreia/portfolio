export default function Footer() {
  return (
    <footer className="bg-white outline outline-slate-300 flex items-center justify-center w-full h-24">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/joeldiascorreia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            LinkedIn
          </a>
          <a
            href="mailto:dias.correia.joel@gmail.com"
            className="text-gray-800 hover:text-gray-600"
          >
            Email
          </a>
        </div>
        <p className="text-black">
          &copy; {new Date().getFullYear()} Joel Dias Correia&rsquo;s Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
