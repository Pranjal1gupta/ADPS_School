import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, FileText, Users, CircleCheck as CheckCircle } from 'lucide-react';

export default function Admissions() {
  const steps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Complete and submit the online application form'
    },
    {
      icon: Users,
      title: 'School Visit',
      description: 'Schedule a campus tour and meet our faculty'
    },
    {
      icon: CheckCircle,
      title: 'Assessment',
      description: 'Student assessment and parent interview'
    },
    {
      icon: Calendar,
      title: 'Enrollment',
      description: 'Complete enrollment and begin the journey'
    }
  ];

  const requirements = [
    'Completed application form',
    'Birth certificate copy',
    'Previous school records',
    'Medical records',
    'Passport-size photographs',
    'Address proof'
  ];

  const grades = [
    { grade: 'Nursery - KG', age: '3-5 years', fee: '₹25,000' },
    { grade: 'Class I - V', age: '6-10 years', fee: '₹30,000' },
    { grade: 'Class VI - VIII', age: '11-13 years', fee: '₹35,000' },
    { grade: 'Class IX - X', age: '14-15 years', fee: '₹40,000' },
    { grade: 'Class XI - XII', age: '16-17 years', fee: '₹45,000' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Admissions</span> Open
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Begin your child's educational journey with us. Applications are now open for the 2024-25 academic year.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to join the ADPS family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-sm font-semibold text-blue-600 mb-2">
                    Step {index + 1}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Levels & Fees */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Grade Levels & Fees
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quality education at affordable fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grades.map((grade, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{grade.grade}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-gray-600 mb-4">Age: {grade.age}</div>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {grade.fee}/year
                  </div>
                  <Button variant="outline" className="w-full">
                    Apply for {grade.grade}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Required Documents
              </h2>
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Important Dates
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="font-semibold text-gray-900">Application Opens</div>
                  <div className="text-gray-600">January 15, 2024</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="font-semibold text-gray-900">Application Deadline</div>
                  <div className="text-gray-600">March 31, 2024</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="font-semibold text-gray-900">Assessment Period</div>
                  <div className="text-gray-600">April 1-15, 2024</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="font-semibold text-gray-900">Academic Year Begins</div>
                  <div className="text-gray-600">June 1, 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our admissions team is here to help you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Admissions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Visit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}