<div align="center">
  <br />
    <a href="https://youtu.be/dGHFV_RMGag" target="_blank">
      <img width="500" alt="PenSync Banner" src="https://github.com/user-attachments/assets/961e5d42-42cc-4fea-841a-ea2bba95bd38">
    </a>
  
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">PenSync</h3>

   <div align="center">
Collaborative Writing and Editing PLatform.
</div>

## 📋 <a name="table">Table of Contents</a>

 *  [About](#about)
 *  [Tech Stack](#tech-stack)
 *  [Features](#features)
 *  [Quick Start](#quick-start)
 


## <a name="about">About</a>

Collaborative Writing and Editing Platform. Easily brainstorm, contribute, and collaborate with your team on any writing project.

## <a name="tech-stack">Tech Stack</a>

- Next.js
- TypeScript
- LiveBlocks
- Tailwind CSS
- Shadcn-ui
- Clerk-auth

## <a name="features">Features</a>

☑️ Collaborative Text Editor: Multiple users can edit the same document simultaneously with real-time updates.

☑️ Documents Management

* Create Documents: Users can create new documents, which are automatically saved and listed.
* Delete Documents: Users can delete documents they own.
* Share Documents: Users can share documents via email or link with view/edit permissions.
* List Documents: Display all documents owned or shared with the user, with search and sorting functionalities.

☑️ Comments: Users can add inline and general comments, with threading for discussions.

☑️ Active Collaborators on Text Editor: Show active collaborators with real-time presence indicators.

☑️ Notifications: Notify users of document shares, new comments, and collaborator activities.

☑️ Responsive: The application is responsive across all devices.

and many more, including code architecture and reusability

## <a name="quick-start"> Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/techy-savant/PenSync
cd PenSync
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY=

```


**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.



