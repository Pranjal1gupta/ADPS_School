import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Sports Day',
      date: '2024-02-15',
      time: '9:00 AM',
      location: 'School Playground',
      category: 'Sports',
      description: 'Join us for our annual sports day featuring various competitions and activities.',
      attendees: 500
    },
    {
      id: 2,
      title: 'Science Exhibition',
      date: '2024-02-22',
      time: '10:00 AM',
      location: 'Science Laboratory',
      category: 'Academic',
      description: 'Students showcase their innovative science projects and experiments.',
      attendees: 200
    },
    {
      id: 3,
      title: 'Cultural Festival',
      date: '2024-03-05',
      time: '6:00 PM',
      location: 'School Auditorium',
      category: 'Cultural',
      description: 'Celebrate diversity with performances, food, and cultural displays.',
      attendees: 800
    },
    {
      id: 4,
      title: 'Parent-Teacher Meeting',
      date: '2024-03-12',
      time: '2:00 PM',
      location: 'Classrooms',
      category: 'Academic',
      description: 'Discuss student progress and development with teachers.',
      attendees: 300
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Winter Concert',
      date: '2024-01-20',
      category: 'Cultural',
      description: 'Students performed beautiful musical pieces.',
      image: 'https://images.pexels.com/photos/8199756/pexels-photo-8199756.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Math Olympiad',
      date: '2024-01-15',
      category: 'Academic',
      description: 'Students competed in mathematical problem-solving.',
      image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      title: 'Art Exhibition',
      date: '2024-01-10',
      category: 'Arts',
      description: 'Showcasing student artwork and creativity.',
      image: 'https://images.pexels.com/photos/8199678/pexels-photo-8199678.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Sports': return 'bg-green-100 text-green-800';
      case 'Academic': return 'bg-blue-100 text-blue-800';
      case 'Cultural': return 'bg-purple-100 text-purple-800';
      case 'Arts': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              School <span className="text-blue-600">Events</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay updated with our latest events and activities.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't miss these exciting upcoming events at ADPS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                    <div className="text-right text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees} expected attendees
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Register for Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Past Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a look at our recent successful events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                    <div className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about upcoming events.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>
    </>
  );
}