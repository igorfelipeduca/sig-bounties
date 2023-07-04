import { FileIcon, FlaskConicalIcon, LinkIcon, Subtitles } from "lucide-react";
import Breadcrumb from "../../components/breadcrumb";
import Link from "next/link";
import Title from "@/app/components/content/title";
import SubTitle from "@/app/components/content/subTitle";
import Text from "@/app/components/content/text";

export default function SigGamba() {
  return (
    <div className="p-6 sm:p-16 border-r border-zinc-800 pr-8">
      <Breadcrumb />

      <div className="mt-16 text-zinc-400 gap-y-8 flex flex-col">
        <div className="flex flex-col">
          <Title title="Sig + Gamba" />

          <SubTitle subTitle="Venha saber mais sobre a nossa parceria com a organização" />

          <Text>
            <div className="flex items-center gap-x-1 text-sigPrimary">
              <FlaskConicalIcon className="h-4 w-4 sm:h-6 sm:w-6" /> Página
              exclusivamente em Português
            </div>
          </Text>
        </div>

        <div className="mt-6">
          <Title title="Overview" />

          <Text>
            Rafael dividiu um pouco das dores dele conosco e nos contou que nas
            zonas pobres e comunidades quilombolas da região de Salvador sempre
            ocorre de famílias compostas por pessoas analfabetas e sem acesso à
            internet serem despejadas e ter seus lares destruídos por empresas
            de energia eólica
          </Text>

          <Text>
            Essa é a parte suja que ocorre por trás de cada inovação de energia
            sustentável, e o nosso projeto é para ajudar a lidar melhor com
            essas perdas
          </Text>
        </div>

        <div className="mt-6">
          <Title title="Metas" />

          <Text>
            Na conversa com Rafael, apresentamos algumas ideias que podem ser do
            interesse da ONG, elas são
          </Text>

          <div className="mt-2">
            <ul className="list-decimal marker:text-sigPrimary list-outside px-8 max-w-5xl">
              <li>
                <Text>
                  Triangulação e rastreio das regiões que serão afetadas pelas
                  empresas através de matrizes de distância e iremos disparar
                  e-mails, mensagens pelo whatsapp e sms para os contatos
                  cadastrados que morem naquele raio detectado
                </Text>
              </li>
              <li>
                <Text>
                  Uma das dores da ONG é: a maioria dessas famílias são
                  compostas por pessoas semi ou totalmente analfabetas, então
                  queremos facilitar cada vez mais a comunicação com essas
                  famílias, e, isso será feito através de text-to-speech e
                  imagens que ilustrem o perigo que eles estão submetidos
                </Text>
              </li>
              <li>
                <Text>
                  Vamos dividir todos os grupos de pessoas em tags, então
                  existirão as famílias que moram em mangues, as famílias que
                  moram na floresta amazônica, famílias que moram na caatinga,
                  famílias que são agricultoras, etc. e vamos notificar elas de
                  formas diferentes e com eventos diferentes
                </Text>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <Title title="Extensões do projeto" />

          <Text>
            Durante a conversa também entramos nos detalhes do modelo de
            bounties que vamos seguir no novo braço da Sig:{" "}
            <span className="text-sigPrimary">Leaf</span> (será um módulo
            atrelado à empresa, mas com uma diferente identidade visual)
          </Text>

          <Text>
            Com o lançamento do Leaf, começaremos a publicar bounties onde
            pessoas poderão cumprir as tarefas e receberão uma{" "}
            <span className="text-sigPrimary">NFT</span> expedida pela Gamba com
            as seguintes informações:
          </Text>

          <ul className="list-disc marker:text-sigPrimary list-outside px-8 max-w-5xl">
            <li>
              <Text>Quantidade de árvores plantadas</Text>
            </li>
            <li>
              <i>
                <Text>Carbon offset</Text>
              </i>
            </li>
            <li>
              <Text>Vidas terrestres favorecidas</Text>
            </li>
            <li>
              <Text>Vidas aquáticas favorecidas</Text>
            </li>
            <li>
              <Text>Parcerias e meios de implementação</Text>
            </li>
            <li>
              <Text>Ações contra a mudança global do clima</Text>
            </li>
          </ul>

          <div className="mt-2">
            <Text>
              <a
                href="https://ipfs.poolpm.nftcdn.io/ipfs/QmV66YgwwjT6yxnvCVmeenBCoyQR5ZXDHKTXvYKE1nSyw6?tk=gJ9diIjpf-_2btE0_yQdrxnsb9lbM8FrPGRNqrut0sk"
                className="max-w-5xl text-sigPrimary underline flex items-center gap-x-2"
              >
                <FileIcon className="h-4 w-4 sm:h-6 sm:w-6" />
                Exemplo de NFT já lançada pela Gambá
              </a>
            </Text>
          </div>
        </div>

        <div className="mt-6">
          <Title title="Parcerias" />

          <Text>
            Claro que como qualquer inciaitiva que envolve comunidade, vamos
            precisar de parcerias. Por sorte, já temos pessoas extremamente
            talentosas ao nosso lado
          </Text>

          <div className="mt-2">
            <ul className="list-disc marker:text-sigPrimary list-outside px-8 max-w-5xl space-y-2">
              <li>
                <a
                  href="https://fros.dev/"
                  className="text-sigPrimary underline flex items-center gap-x-2"
                >
                  <Text className="flex items-center gap-x-2">
                    Fros Venture
                    <LinkIcon className="h-4 w-4 sm:h-6 sm:w-6" />
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="https://sibelius.github.io/"
                  className="text-sigPrimary underline flex items-center gap-x-2"
                >
                  <Text className="flex items-center gap-x-2">
                    Sibelius Seraphini
                    <LinkIcon className="h-4 w-4 sm:h-6 sm:w-6" />
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/prezedesign?igshid=OGIzYTJhMTRmYQ"
                  className="text-sigPrimary underline flex items-center gap-x-2"
                >
                  <Text className="flex items-center gap-x-2">
                    Preze Design
                    <LinkIcon className="h-4 w-4 sm:h-6 sm:w-6" />
                  </Text>
                </a>
              </li>
              <li>
                <Text>
                  <a
                    href="https://gamba.org.br/"
                    className="text-sigPrimary underline flex items-center gap-x-2"
                  >
                    Gambá
                    <LinkIcon className="h-4 w-4 sm:h-6 sm:w-6" />
                  </a>
                </Text>
              </li>
              <li>
                <Text>
                  <a
                    href="https://instagram.com/migrandoparati.oficial?igshid=YzcxN2Q2NzY0OA"
                    className="text-sigPrimary underline flex items-center gap-x-2"
                  >
                    Migranti
                    <LinkIcon className="h-4 w-4 sm:h-6 sm:w-6" />
                  </a>
                </Text>
              </li>
            </ul>

            <Text>
              E vamos deixar também o convite para qualquer outra empresa ou
              pessoa que queira contribuir com o projeto, podem entrar em
              contato por{" "}
              <a
                href="mailto:contact@sigcoding.com"
                className="text-sigPrimary"
              >
                contact@sigcoding.com
              </a>{" "}
              e enviar a sua proposta. Faremos questão de divulgar a sua
              iniciativa e seu nome será atrelado ao nosso projeto de tecnologia
              para sustentabilidade
            </Text>
          </div>
        </div>

        <div className="mt-6">
          <Title title="Comprovação de legitimidade" />

          <Text className="flex items-center gap-x-2">
            Projetos já realizados:{" "}
            <a
              href="https://www.gamba.org.br/realizados"
              className="flex items-center text-sigPrimary underline gap-x-2"
            >
              Projetos Gambá
              <LinkIcon className="h-6 w-6" />
            </a>
          </Text>

          <Text>
            A União Europeia é financiadora do projeto, então segue a
            comprovação por meio do contrato travado entre os dois órgãos:{" "}
            <span>
              <a
                href="https://drive.google.com/file/d/1ygkPI7Q20YkSNuJ8tfaw9aGewlTUgWu7/view?usp=sharing"
                className="text-sigPrimary underline"
              >
                Contrato
              </a>
            </span>
          </Text>
        </div>
      </div>
    </div>
  );
}
