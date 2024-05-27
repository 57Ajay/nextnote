# NextPost

NextPost is a blog post site created with Next.js, Prisma, and SQLite. Users can add posts by providing a title and body. Authentication is required to post anything, and it is provided by Kinde.

## Features

- Add blog posts with a title and body
- User authentication via Kinde
- Data management with Prisma and SQLite

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [Kinde](https://kinde.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (or yarn)
- SQLite

### Installation

1. Clone the repository

    ```bash
    git clone https://github.com/57ajay/nextnote.git
    ```

2. Navigate to the project directory

    ```bash
    cd mextpost
    ```

3. Install the dependencies

    ```bash
    npm install
    ```

### Setup

1. Set up Prisma

    Generate the Prisma client and create the SQLite database:

    ```bash
    npx prisma migrate dev --name init
    ```

2. Configure Kinde

    Create a `.env` file in the root directory and add your Kinde credentials:

    ```plaintext
    NEXT_PUBLIC_KINDE_CLIENT_ID=your_client_id
    NEXT_PUBLIC_KINDE_CLIENT_SECRET=your_client_secret
    NEXT_PUBLIC_KINDE_REDIRECT_URI=http://localhost:3000/api/auth/callback
    NEXT_PUBLIC_KINDE_ISSUER_URL=https://your_kinde_domain.kinde.com
    ```

### Running the Project

Start the development server:

```bash
npm run dev