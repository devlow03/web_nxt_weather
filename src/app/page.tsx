'use client'
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import WeatherIcon from "@/components/WeatherIcon";
import { convertTemperature } from "@/utils/convertTemperature";
import { getDayOrNightIcon } from "@/utils/getDayOrNightIcon";
import axios from "axios";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';



interface WeatherDetail {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherDetail[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export default function Home() {
  const { isLoading, error, data } = useQuery<WeatherData>("repoData", async () =>
    {
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=vietnam&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`)
      return data;
    }
  );
  console.log("data",data?.city.name)
  const firstData = data?.list[0];

  if (isLoading) return (
    <div className="flex items-center min-h-screen justify-center">
      <p className="animate-bounce">Đang tải...</p>
    </div>
  )
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar/>
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4 ">
        {/* today data */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="flex gap-1 text-2xl items-end">
              <p>{format(parseISO(firstData?.dt_txt??""),'EEEE')}</p>
              <p className="text-lg">({format(parseISO(firstData?.dt_txt??""),'dd.MM.yyyy')})</p>
            </h2>
            <Container className="gap-10 px-6 items-center">
              <div className="flex flex-col px-4">
                <span className="text-5xl">
                {convertTemperature(firstData?.main.temp??296.37 )}°
                </span>
                <p className="text-xs space-x-1 whitespace-nowrap">
                  <span>Feels like</span>
                  <span>
                    {convertTemperature(firstData?.main.feels_like??0)}°
                  </span>
                </p>
                <p className="text-xs space-x-2">
                  <span>
                    {convertTemperature(firstData?.main.temp_min??0)}°↓{" "}
                  </span>

                  <span>
                    {convertTemperature(firstData?.main.temp_max??0)}°↑
                  </span>
                </p>
              </div>
               {/* time and weather icon */}
          <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-">
            {data?.list.map((data,index)=>
            <div key={index}
            className="flex flex-col justify-between gap-2 items-center text-xs font-semibold ">
              <p className="whitespace-nowrap">
                {format(parseISO(data.dt_txt),"h:mm a")}
              </p>
              <WeatherIcon iconName={getDayOrNightIcon(data.weather[0].icon,data.dt_txt)}/>
              <p>{convertTemperature(data?.main.temp??0)}°</p>
            </div>
            )}
            </div>
            </Container>
          </div>

          <div className="flex gap-4">
            <Container className="w-fit justify-center flex-col px-4 items-center ">
              <p className="capitalize text-center">{firstData?.weather[0].description}</p>
              <WeatherIcon iconName={getDayOrNightIcon(firstData?.weather[0].icon??"",firstData?.dt_txt??"")}/>

            </Container>

            <Container className="bg-yellow-300/80 px-6 gap-4 justify-between">

            </Container>
          </div>
         
        </section>
        {/* 7 days forcast data */}
        <section className="flex w-full flex-col gap-4">
              <p className="text-2xl">Forcast (7 days)</p>
        </section>        
      </main>
    </div>
  );
}
