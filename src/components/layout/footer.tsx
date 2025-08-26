export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-12 py-8">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>
          © {currentYear} Desenvolvido por Carlos Eduardo. Todos os direitos reservados.
        </p>
        <p>Lançado sob a licença MIT.</p>
      </div>
    </footer>
  )
}