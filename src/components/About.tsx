import Image from "next/image"
import { Linkedin } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

export function About() {
  const t = useTranslations("about")
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#48b4e8]/10 text-[#48b4e8] text-sm font-medium">
            {t("badge")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase mb-2">
            {t("title")}
          </h2>
          <p className="text-black/80 max-w-3xl mx-auto">{t("description1")}</p>
        </div>

        <div className="space-y-20">
          <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
            <div className="w-[280px] h-[350px] relative">
              <Image
                src={"/team-member.png"}
                alt={"Team Member"}
                fill
                sizes="280px"
                className="grayscale object-cover object-center"
              />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[#48b4e8] mb-6">
                {t("firstMember.name")}
              </h3>
              <div className="space-y-4">
                <p className="text-black/80">{t("firstMember.description")}</p>
              </div>
              <div className="mt-4">
                {t("firstMember.linkedin") && (
                  <Link href={t("firstMember.linkedin")} aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 text-gray-600" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
            <div className="w-[280px] h-[350px] relative">
              <Image
                src={"/team-member.png"}
                alt={"Team Member"}
                fill
                sizes="280px"
                className="grayscale object-cover object-center"
              />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[#48b4e8] mb-6">
                {t("secondMember.name")}
              </h3>
              <div className="space-y-4">
                <p className="text-black/80">{t("secondMember.description")}</p>
              </div>
              <div className="mt-4">
                {t("secondMember.linkedin") && (
                  <Link href={t("secondMember.linkedin")} aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 text-gray-600" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
