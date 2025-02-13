import MainBanner from '../design/MainBanner/MainBanner';
import Container from '../design/container/Container'

function Index() {
    return (
      <>
        <MainBanner /> {/* Create a markup */}
        <div className="features">
          <Container />
        </div>
      </>
      );
  }
export default Index;
