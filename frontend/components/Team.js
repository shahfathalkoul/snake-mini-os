import styles from "./Team.module.css";

const highlights = [
  {
    icon: "⚙️",
    title: "Custom Memory Allocator",
    description:
      "First-Fit heap on an 8 KB VRAM buffer with block splitting, coalescing, and 8-byte alignment.",
  },
  {
    icon: "🧮",
    title: "Loop-Based Arithmetic",
    description:
      "Multiplication, division, and modulo implemented via repeated addition/subtraction — no *, /, or % operators.",
  },
  {
    icon: "🖥️",
    title: "Raw ANSI Rendering",
    description:
      "All output via VT100 escape codes and write() syscalls — zero dependency on ncurses, SDL, or any graphics library.",
  },
  {
    icon: "⌨️",
    title: "Non-Blocking Input",
    description:
      "termios raw mode with VMIN=0, VTIME=0 for fully non-blocking read(), including multi-byte arrow key detection.",
  },
  {
    icon: "🎲",
    title: "Custom Pseudo-RNG",
    description:
      "Tick-counter seeded LCG using prime multipliers — no rand() or srand() calls.",
  },
  {
    icon: "🐍",
    title: "Linked-List Snake",
    description:
      "O(1) head insertion via singly linked list, dynamic growth, gradient colouring, and direction-aware head glyph.",
  },
];

export default function Team() {
  return (
    <section className={styles.section} id="about-me">
      <div className={`${styles.header} fade-in`}>
        <p className="section-label">About This Project</p>
        <h2 className="section-title">Built From Scratch</h2>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>
          Every system layer re-implemented by hand — no shortcuts, no
          libraries, no excuses.
        </p>
      </div>

      <div className={`${styles.grid} stagger`}>
        {highlights.map((h, i) => (
          <div key={i} className={`${styles.card} fade-in`}>
            <div className={styles.avatar}>{h.icon}</div>
            <h3 className={styles.name}>{h.title}</h3>
            <p className={styles.contribution}>{h.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
