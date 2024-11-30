import React from "react";
import PageLayout from "../components/layouts/page-layout";
import ContactList from "../components/contactList";

function Home() {
  return (
    <div>
      <PageLayout>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quod
          expedita cupiditate aliquam facere atque sequi accusamus reprehenderit
          vero perferendis ratione doloremque eos reiciendis deserunt veniam
          tenetur ducimus, soluta incidunt?
        </h3>
      </PageLayout>
      <ContactList />
    </div>
  );
}

export default Home;
