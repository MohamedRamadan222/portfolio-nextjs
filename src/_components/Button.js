export const Button = ({ variant }) =>
(
  <button
    className={`border border-gray-300 px-6 py-2 rounded-full
      ${variant === "secondary" ?
        "hover:bg-[var(--foreground)] hover:text-[var(--background)]" :
        "hover:bg-[var(--background)] hover:text-[var(--foreground)] "}`}
  >See my work</button>
)
