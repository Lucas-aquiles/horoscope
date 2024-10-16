import {useState, useEffect} from 'react';

interface Horoscope {
  [key: string]: string;
  aries: string;
  acuario: string;
  cancer: string;
  capricornio: string;
  geminis: string;
  leo: string;
  libra: string;
  escorpio: string;
  virgo: string;
  sagitario: string;
  piscis: string;
  tauro: string;
}

const useFetchHoroscope = () => {
  const [state, setState] = useState<Horoscope[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vTM63hHA909j3RoHZV8fH3gXdoiyIXIAFsc4W5qYSVgOFjyU-bN7R1K5siSU4fUXj-j829FwI94juIo/pub?output=tsv',
        );
        const text = await response.text();
        const data = text
          .split('\n')
          .slice(1)
          .map(row => {
            const [
              aries,
              acuario,
              cancer,
              capricornio,
              geminis,
              leo,
              libra,
              escorpio,
              virgo,
              sagitario,
              piscis,
              tauro,
            ] = row.split('\t');

            return {
              aries,
              acuario,
              cancer,
              capricornio,
              geminis,
              leo,
              libra,
              escorpio,
              virgo,
              sagitario,
              piscis,
              tauro,
            };
          });
        setState(data);
      } catch (error) {
        setError('Error fetching horoscope data');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {state, loading, error};
};

export default useFetchHoroscope;
