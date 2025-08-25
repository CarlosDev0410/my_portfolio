import { TypingAnimation } from "@/components/magicui/typing-animation";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { getProfileData, getTotalProjectsCount, getTotalTechnologiesCount } from "@/lib/data";

export function Hero() {
  const { personal, metrics } = getProfileData();
  const totalProjects = getTotalProjectsCount();
  const totalTechnologies = getTotalTechnologiesCount();
  
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      
      <div className="container mx-auto text-center">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        )}
      />
        <div className="max-w-4xl mx-auto">
  
          {/* Nome */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {personal.name}
          </h1>

          {/* Profissão com Typing Animation */}
          <div className="mb-6">
            <TypingAnimation className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary">
              {personal.title}
            </TypingAnimation>
          </div>

          {/* Descrição */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            {personal.description}
          </p>

          {/* Estatísticas com Number Ticker */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-8 text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  <NumberTicker value={metrics.experience} />+
                </div>
                <div className="text-sm">Anos de Experiência</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  <NumberTicker value={totalProjects} />+
                </div>
                <div className="text-sm">Projetos Concluídos</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  <NumberTicker value={totalTechnologies} />+
                </div>
                <div className="text-sm">Tecnologias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
