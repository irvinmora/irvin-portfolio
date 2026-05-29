import "./globals.css";

export const metadata = {
  title: "Irvin Mora | Desarrollador Web Full-Stack",
  description: "Portafolio profesional de Irvin Mora, Ingeniero en Sistemas y Desarrollador Web Full-Stack. Proyectos en PHP, Next.js, React y bases de datos.",
  keywords: ["Irvin Mora", "Desarrollador Web", "Full-Stack", "PHP", "Next.js", "React", "Portafolio", "Ecuador"],
  authors: [{ name: "Irvin Mora" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
