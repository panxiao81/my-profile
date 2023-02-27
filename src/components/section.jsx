export default function Section({ children, className }) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className={"prose prose-xl"}>{children}</div>
      </div>
    </div>
  );
}
