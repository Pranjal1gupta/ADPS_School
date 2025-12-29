import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">ADPS</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Arya Dharam Public School is committed to providing excellent education 
              and nurturing young minds for a brighter future.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Education Street, Learning City</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@adps.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Academics</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Faculty</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Campus</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Primary School</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Middle School</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">High School</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Extracurricular</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Arya Dharam Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}