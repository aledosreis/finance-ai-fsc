# Finance AI

Este é um projeto desenvolvido durante um bootcamp do [Full Stack Club](https://fullstackclub.com.br/), que consiste em uma aplicação de gerenciamento financeiro com recursos de IA para análise de gastos.

## 🚀 Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/) - Framework React com Server Components
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Shadcn/ui](https://ui.shadcn.com/) - Biblioteca de componentes React
- [Prisma](https://www.prisma.io/) - ORM para Node.js e TypeScript
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [Clerk](https://clerk.dev/) - Autenticação e gerenciamento de usuários
- [Stripe](https://stripe.com/) - Processamento de pagamentos
- [OpenAI](https://openai.com/) - API de Inteligência Artificial
- [Recharts](https://recharts.org/) - Biblioteca de gráficos para React

## 💡 Funcionalidades

- 📊 Dashboard com visão geral das finanças
- 💰 Cadastro e gerenciamento de transações
- 📈 Gráficos e análises de gastos
- 🤖 Relatórios gerados por IA
- 💳 Sistema de assinatura com Stripe
- 🔐 Autenticação segura com Clerk

## 🔧 Configuração do Ambiente

### Pré-requisitos

- Node.js 18 ou superior
- Banco de dados PostgreSQL (você pode usar um serviço como [NeonDB](https://neon.tech/) ou [Docker](https://www.docker.com/))
- Uma conta no Clerk
- Uma conta no Stripe
- Uma conta na OpenAI

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Database
DATABASE_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PREMIUM_PLAN_PRICE_ID=
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL=

# OpenAI
OPENAI_API_KEY=

# App
APP_URL=
```

### Onde encontrar os valores das variáveis de ambiente:

1. **Database**:
   - Se estiver usando NeonDB:
     - Acesse o [Dashboard do NeonDB](https://console.neon.tech/)
     - Crie um novo projeto
     - Copie a string de conexão para `DATABASE_URL`
   - Se estiver usando Docker:
     - Use `DATABASE_URL="postgresql://postgres:password@localhost:5242/finance-ai"`

2. **Clerk**:
   - Acesse o [Dashboard do Clerk](https://dashboard.clerk.dev/)
   - Crie uma nova aplicação
   - Em "API Keys", você encontrará as chaves `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` e `CLERK_SECRET_KEY`

3. **Stripe**:
   - Acesse o [Dashboard do Stripe](https://dashboard.stripe.com/apikeys)
   - As chaves `STRIPE_SECRET_KEY` e `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` estão na seção "API keys"
   - Para o `STRIPE_WEBHOOK_SECRET`:
     - Instale o [Stripe CLI](https://stripe.com/docs/stripe-cli)
     - Execute `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
     - O webhook secret será exibido no terminal
   - Para o `STRIPE_PREMIUM_PLAN_PRICE_ID`:
     - No Dashboard do Stripe, vá em "Products"
     - Crie um novo produto ou selecione um existente
     - Na seção "Pricing", copie o ID do preço (começa com "price\_")
   - Para o `NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL`:
     - No Dashboard do Stripe, vá em "Settings > Customer Portal"
     - Configure o portal do cliente
     - Copie a URL do portal (formato: https://billing.stripe.com/p/...)

4. **OpenAI**:
   - Acesse o [Dashboard da OpenAI](https://platform.openai.com/api-keys)
   - Crie uma nova API key
   - Copie o valor para `OPENAI_API_KEY`

5. **App**:
   - Para desenvolvimento local, use `APP_URL="http://localhost:3000"`
   - Para produção, use a URL do seu deploy (ex: https://seu-app.vercel.app)

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/aledosreis/finance-ai-fsc.git
cd finance-ai-fsc
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados:

   **Opção 1 - Usando Docker:**

   ```bash
   docker-compose up -d
   ```

   **Opção 2 - Usando NeonDB:**
   - Crie uma conta em [NeonDB](https://neon.tech/)
   - Crie um novo projeto
   - Copie a string de conexão e atualize a variável `DATABASE_URL` no arquivo `.env`

4. Execute as migrações do banco de dados:

   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## 👏 Agradecimentos

Este projeto foi desenvolvido como parte de um bootcamp do [Full Stack Club](https://fullstackclub.com.br/), uma plataforma incrível para aprender desenvolvimento web moderno.
