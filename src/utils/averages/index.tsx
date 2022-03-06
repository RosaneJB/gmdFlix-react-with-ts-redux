export const handleAverage = (average?: number, size?: number) => {
    if (average === undefined) {
      return "---";
    }
    if (average < 2) {
      return <img height={size ? size : 15} src="/assets/img/one.png" alt="uma estrela" />;
    } else if (average < 4) {
      return <img height={size ? size : 15} src="/assets/img/two.png" alt="duas estrela" />;
    } else if (average < 6) {
      return <img height={size ? size : 15} src="/assets/img/three.png" alt="três estrela" />;
    } else if (average < 8) {
      return <img height={size ? size : 15} src="/assets/img/four.png" alt="quatro estrela" />;
    } else {
      return <img height={size ? size : 15} src="/assets/img/five.png" alt="cinco estrela" />;
    }
  };