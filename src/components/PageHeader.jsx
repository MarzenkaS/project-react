import Menu from './Menu'

const PageHeader = (props) => {
  return (
    <header className="page-header">
      <h1>Header</h1>
      <Menu className="test-class"></Menu>
    </header>
  );
};

export default PageHeader;
