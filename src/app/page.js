'use client'

export default function Page() {

  async function getData() {
    const data = await fetch("https://final-project-additional-repo-the.onrender.com/api/user");

    console.log(data.json())

  }

  getData();


  return (
    <div>
      <h1>DID IT WORK?</h1>

    </div>
  )
}