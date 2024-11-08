"use client";
import { useEffect, useState, FormEvent } from "react";
import { Card, Input, Button, Progress } from "@nextui-org/react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownBoxProps {
  value: number;
  label: string;
}

const CountdownBox = ({ value, label }: CountdownBoxProps) => (
  <Card className="p-4 w-full">
    <div className="flex flex-col items-center justify-center">
      <span className="text-4xl font-bold text-primary">{value}</span>
      <span className="text-sm text-gray-500 mt-1">{label}</span>
    </div>
  </Card>
);

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const launchDate = new Date("2024-12-31T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setIsLoading(false);
  };

  const progressValue = (timeLeft.days / 365) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 p-4">
      <Card className="max-w-3xl w-full p-6 md:p-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Coming Soon
            </h1>
            <p className="text-gray-600">
              We&apos;re crafting something amazing for you
            </p>
          </div>

          {/* Progress */}
          <div className="w-full px-4">
            <Progress
              size="lg"
              value={progressValue}
              className="max-w-md mx-auto"
              color="primary"
              showValueLabel={false}
            />
          </div>

          {/* Countdown */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CountdownBox value={timeLeft.days} label="Days" />
            <CountdownBox value={timeLeft.hours} label="Hours" />
            <CountdownBox value={timeLeft.minutes} label="Minutes" />
            <CountdownBox value={timeLeft.seconds} label="Seconds" />
          </div>

          {/* Subscription Form */}
          <div className="mt-8">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="max-w-md mx-auto">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    variant="bordered"
                    size="lg"
                    classNames={{
                      input: "text-base",
                    }}
                    required
                  />
                </div>
                {/* <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  className="w-full max-w-md mx-auto"
                  isLoading={isLoading}
                >
                  Notify Me
                </Button> */}
              </form>
            ) : (
              <Card className="bg-green-50 border-green-200 p-4">
                <p className="text-green-600 text-center">
                  Thanks for subscribing! We&apos;ll keep you updated.
                </p>
              </Card>
            )}
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 mt-6">
            <p>
              Stay tuned for updates and be the first to know when we launch!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
