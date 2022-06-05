import Link from "next/link";

function ClientsPage() {
  const clients = [
    {
      id: "max",
      name: "Maximillian",
    },
    {
      id: "manuel",
      name: "Manuel",
    },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                // Describe the file as to lead the file path in the folder
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
