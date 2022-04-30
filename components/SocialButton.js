function SocialButton({ href, children }) {
  return (
    <a
      href={href}
      className="p-3 bg-gray-300 rounded-full duration-200 dark:bg-gray-600 dark:hover:bg-gray-500 hover:bg-gray-200"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default SocialButton;
