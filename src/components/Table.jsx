const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>First Name</th>
          <th>Surname</th>
          <th>Course Name</th>
          <th>Completion status</th>
        </tr>
        {data.map((item) => (
          <tr key={item.enrolmentID}>
            <td>{item.firstname}</td>
            <td>{item.surname}</td>
            <td>{item.description}</td>
            <td>{item.CompletionStatus}</td>
           </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
