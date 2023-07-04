import { FileIcon, FlaskConicalIcon, LinkIcon } from "lucide-react";
import Breadcrumb from "../../components/breadcrumb";
import Link from "next/link";

export default function SigGamba() {
  return (
    <div className="p-16 border-r border-zinc-800 pr-8">
      <Breadcrumb />

      <div className="mt-16 text-zinc-400 gap-y-8 flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">Sig + Gamba</h1>

          <h2 className="text-xl mt-2">
            Venha saber mais sobre a nossa parceria com a organização
          </h2>

          <h2 className="text-xl mt-2 flex items-center gap-x-2 text-sigPrimary">
            <FlaskConicalIcon className="h-6 w-6" /> Página exclusivamente em
            Português
          </h2>
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-2xl">Overview</h3>

          <p className="max-w-5xl mt-2 text-lg">
            Rafael dividiu um pouco das dores dele conosco e nos contou que nas
            zonas pobres e comunidades quilombolas da região de Salvador sempre
            ocorre de famílias compostas por pessoas analfabetas e sem acesso à
            internet serem despejadas e ter seus lares destruídos por empresas
            de energia eólica
          </p>

          <p className="max-w-5xl mt-2 text-lg">
            Essa é a parte suja que ocorre por trás de cada inovação de energia
            sustentável, e o nosso projeto é para ajudar a lidar melhor com
            essas perdas
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-2xl">Metas</h3>

          <p className="max-w-5xl mt-2 text-lg">
            Na conversa com Rafael, apresentamos algumas ideias que podem ser do
            interesse da ONG, elas são
          </p>

          <div className="mt-2">
            <ul className="list-decimal marker:text-sigPrimary list-outside px-8 max-w-5xl">
              <li>
                Triangulação e rastreio das regiões que serão afetadas pelas
                empresas através de matrizes de distância e iremos disparar
                e-mails, mensagens pelo whatsapp e sms para os contatos
                cadastrados que morem naquele raio detectado
              </li>
              <li>
                Uma das dores da ONG é: a maioria dessas famílias são compostas
                por pessoas semi ou totalmente analfabetas, então queremos
                facilitar cada vez mais a comunicação com essas famílias, e,
                isso será feito através de text-to-speech e imagens que ilustrem
                o perigo que eles estão submetidos
              </li>
              <li>
                Vamos dividir todos os grupos de pessoas em tags, então
                existirão as famílias que moram em mangues, as famílias que
                moram na floresta amazônica, famílias que moram na caatinga,
                famílias que são agricultoras, etc. e vamos notificar elas de
                formas diferentes e com eventos diferentes
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-2xl">Extensões do projeto</h3>

          <p className="max-w-5xl mt-2 text-lg">
            Durante a conversa também entramos nos detalhes do modelo de
            bounties que vamos seguir no novo braço da Sig:{" "}
            <span className="text-sigPrimary">Leaf</span> (será um módulo
            atrelado à empresa, mas com uma diferente identidade visual)
          </p>

          <p className="max-w-5xl mt-2 text-lg">
            Com o lançamento do Leaf, começaremos a publicar bounties onde
            pessoas poderão cumprir as tarefas e receberão uma{" "}
            <span className="text-sigPrimary">NFT</span> expedida pela Gamba com
            as seguintes informações:
          </p>

          <ul className="list-disc marker:text-sigPrimary list-outside px-8 max-w-5xl">
            <li>Quantidade de árvores plantadas</li>
            <li>
              <i>Carbon offset</i>
            </li>
            <li>Vidas terrestres favorecidas</li>
            <li>Vidas aquáticas favorecidas</li>
            <li>Parcerias e meios de implementação</li>
            <li>Ações contra a mudança global do clima</li>
          </ul>

          <div className="mt-2">
            <a
              href="https://ipfs.poolpm.nftcdn.io/ipfs/QmV66YgwwjT6yxnvCVmeenBCoyQR5ZXDHKTXvYKE1nSyw6?tk=gJ9diIjpf-_2btE0_yQdrxnsb9lbM8FrPGRNqrut0sk"
              className="max-w-5xl text-lg text-sigPrimary underline flex items-center gap-x-2"
            >
              <FileIcon className="h-6 w-6" />
              Exemplo de NFT já lançada pela Gambá
            </a>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-2xl">Parcerias</h3>

          <p className="max-w-5xl mt-2 text-lg">
            Claro que como qualquer inciaitiva que envolve comunidade, vamos
            precisar de parcerias. Por sorte, já temos pessoas extremamente
            talentosas ao nosso lado
          </p>

          <div className="mt-2">
            <ul className="list-disc marker:text-sigPrimary list-outside px-8 max-w-5xl space-y-2">
              <li>
                <a
                  href="https://fros.dev/"
                  className="text-sigPrimary underline flex items-center gap-x-2"
                >
                  Fros Venture
                  <LinkIcon className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://sibelius.github.io/"
                  className="text-sigPrimary underline flex items-center gap-x-2"
                >
                  Sibelius Seraphini
                  <LinkIcon className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/prezedesign?igshid=OGIzYTJhMTRmYQ"
                  className="text-sigPrimary underline flex items-center gap-x-2"
                >
                  Preze Design
                  <LinkIcon className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://gamba.org.br/"
                  className="text-sigPrimary underline flex items-center gap-x-2"
                >
                  Gambá
                  <LinkIcon className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/migrandoparati.oficial?igshid=YzcxN2Q2NzY0OA"
                  className="text-sigPrimary underline flex items-center gap-x-2"
                >
                  Migranti
                  <LinkIcon className="h-6 w-6" />
                </a>
              </li>
            </ul>

            <p className="max-w-5xl mt-2 text-lg">
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
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-2xl">Comprovação de legitimidade</h3>

          <p className="max-w-5xl mt-2 text-lg flex items-center gap-x-2">
            Projetos já realizados:{" "}
            <a
              href="https://www.gamba.org.br/realizados"
              className="flex items-center text-sigPrimary underline gap-x-2"
            >
              Projetos Gambá
              <LinkIcon className="h-6 w-6" />
            </a>
          </p>

          <p className="max-w-5xl mt-2 text-lg">
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
          </p>
        </div>
      </div>
    </div>
  );
}
