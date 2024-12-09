
import Timeline from './_components/Timeline';
import Transition from '@/components/shared/Transition';


const AboutPage = () => {
  return (
    <>
    <Transition/>
      <div className="bg-[#f5f7ff] text-gray-800">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-[#624CF5] mb-6"
            >
              About the Student Council
            </h1>
            <p
              className="text-lg text-gray-600"
            >
              Learn about the vision, milestones, and the impact of the Student Council on our college community.
            </p>
          </div>
        </section>

        {/* Mission, Vision, and Values */}
        <section className="pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <h2
                className="text-2xl font-semibold text-[#624CF5]"
              >
                Our Mission
              </h2>
              <p className="text-gray-600">
                Empower students to lead, innovate, and create a vibrant college community where everyone thrives.
              </p>
            </div>
            <div className="space-y-4">
              <h2
                className="text-2xl font-semibold text-[#624CF5]"

              >
                Our Vision
              </h2>
              <p className="text-gray-600">
                A collaborative and inclusive environment that nurtures leadership and inspires change.
              </p>
            </div>
            <div className="space-y-4">
              <h2
                className="text-2xl font-semibold text-[#624CF5]"
              >
                Our Values
              </h2>
              <p className="text-gray-600">
                Integrity, creativity, and teamwork are the foundations of our council’s mission.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Timeline Section */}
        <Timeline />

      </div>
    </>
  );
};

export default AboutPage;
