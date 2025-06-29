import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { 
  Server, 
  Cloud, 
  Shield, 
  Settings, 
  Phone, 
  Mail, 
  CheckCircle, 
  Users, 
  TrendingUp,
  Handshake,
  RefreshCw,
  Menu,
  X,
  Send
} from 'lucide-react'
import trilinkLogo from './assets/trilink-logo.png'
import teamPhoto from './assets/team-photo.jpg'
import cloudSecurity from './assets/cloud-security.jpg'
import itTeam from './assets/it-team.jpg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      const result = await response.json()
      
      if (response.ok) {
        alert(result.message || 'Thank you for your inquiry! We will contact you soon.')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        })
      } else {
        alert(result.error || 'An error occurred. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again.')
    }
  }

  const services = [
    {
      icon: Server,
      title: "IT Infrastructure & Field Support",
      items: [
        "On-site hardware/software diagnostics & repairs",
        "Network setup & cable management", 
        "Enterprise system installations",
        "Managed desktop support"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      items: [
        "Cloud migration & deployment",
        "Office 365 / Azure setup",
        "Cloud backup and disaster recovery",
        "Virtualization solutions"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions", 
      items: [
        "Endpoint protection and firewall configuration",
        "Network security audits",
        "Data encryption and compliance",
        "Incident response and threat monitoring"
      ]
    },
    {
      icon: Settings,
      title: "Consulting & System Integration",
      items: [
        "IT project planning and deployment",
        "Vendor & software selection support",
        "Custom IT solutions tailored to business goals",
        "Process automation and optimization"
      ]
    }
  ]

  const whyChooseUs = [
    {
      icon: Users,
      title: "Experienced Support",
      description: "Real-world IT expertise with hands-on troubleshooting and deployment"
    },
    {
      icon: CheckCircle,
      title: "Reliable Solutions", 
      description: "We prioritize uptime, performance, and user satisfaction"
    },
    {
      icon: RefreshCw,
      title: "End-to-End Service",
      description: "From consultation to implementation to ongoing support"
    },
    {
      icon: TrendingUp,
      title: "Scalable Technology",
      description: "We grow with your business"
    },
    {
      icon: Handshake,
      title: "Customer-Centric",
      description: "We're not just providers — we're your technology partners"
    }
  ]

  const contacts = [
    {
      name: "Mogahid Alzalam",
      title: "Senior IT Consultant", 
      email: "malzalam@trilinktechnology.com"
    },
    {
      name: "Mehdy Elouassi",
      title: "Managing Partner",
      email: "melouassi@trilinktechnology.com"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
              <img src={trilinkLogo} alt="TriLink Technology" className="h-10 w-auto" />
              <span className="ml-3 text-xl font-bold text-[#1A2B4C]">TriLink Technology</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-gray-700 hover:text-[#1A2B4C] px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#services" className="text-gray-700 hover:text-[#1A2B4C] px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#why-us" className="text-gray-700 hover:text-[#1A2B4C] px-3 py-2 rounded-md text-sm font-medium">Why Us</a>
                <a href="#contact" className="text-gray-700 hover:text-[#1A2B4C] px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#1A2B4C] p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#about" className="text-gray-700 hover:text-[#1A2B4C] block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-[#1A2B4C] block px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#why-us" className="text-gray-700 hover:text-[#1A2B4C] block px-3 py-2 rounded-md text-base font-medium">Why Us</a>
              <a href="#contact" className="text-gray-700 hover:text-[#1A2B4C] block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A2B4C] to-[#2A3B5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Solutions for a Connected Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Empowering businesses with secure, scalable, and reliable technology solutions
            </p>
            <Button size="lg" className="bg-white text-[#1A2B4C] hover:bg-gray-100">
              <a href="#contact">Get Started Today</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-4">About TriLink Technology</h2>
            <div className="w-24 h-1 bg-[#1A2B4C] mx-auto mb-8"></div>
          </div>
          
          {/* Team Photo */}
          <div className="mb-16">
            <img 
              src={teamPhoto} 
              alt="Professional IT Team" 
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#1A2B4C] mb-4">
                Forward-Thinking IT Solutions Provider
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                TriLink Technology is a forward-thinking IT solutions provider focused on empowering businesses with secure, scalable, and reliable technology. As a newly established LLC, we are committed to delivering excellence across core IT services including infrastructure setup, field support, cloud solutions, and cybersecurity.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're a startup or an enterprise, we design tech ecosystems that are built for today and ready for tomorrow.
              </p>
            </div>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-l-[#1A2B4C]">
                <CardHeader>
                  <CardTitle className="text-[#1A2B4C]">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To be the trusted technology partner that bridges innovation, performance, and security — empowering organizations to reach their full potential in a digital-first world.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-[#1A2B4C]">
                <CardHeader>
                  <CardTitle className="text-[#1A2B4C]">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We deliver customer-focused IT services and digital infrastructure with integrity, precision, and adaptability — ensuring our clients thrive in an ever-evolving technological landscape.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-[#1A2B4C] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>
          
          {/* Services Image */}
          <div className="mb-16">
            <img 
              src={cloudSecurity} 
              alt="Cloud Computing and Cybersecurity" 
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#1A2B4C] text-white rounded-lg mr-4">
                      <service.icon size={24} />
                    </div>
                    <CardTitle className="text-[#1A2B4C]">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-4">Why Choose TriLink?</h2>
            <div className="w-24 h-1 bg-[#1A2B4C] mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A2B4C] text-white rounded-full mb-4">
                  <reason.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[#1A2B4C] mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1A2B4C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-200">
              Ready to transform your IT infrastructure? Let us know how we can help you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white text-[#1A2B4C] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1"
                    rows={4}
                    placeholder="Tell us about your IT needs..."
                  />
                </div>
                <Button type="submit" className="w-full bg-[#1A2B4C] hover:bg-[#2A3B5C] text-white">
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <img 
                  src={itTeam} 
                  alt="IT Team Collaboration" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg mb-8"
                />
              </div>
              
              {contacts.map((contact, index) => (
                <Card key={index} className="bg-white text-[#1A2B4C]">
                  <CardHeader>
                    <CardTitle>{contact.name}</CardTitle>
                    <CardDescription className="text-gray-600">{contact.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Mail size={20} className="mr-3 text-[#1A2B4C]" />
                      <a href={`mailto:${contact.email}`} className="hover:underline break-all">{contact.email}</a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={trilinkLogo} alt="TriLink Technology" className="h-8 w-auto mr-3" />
              <span className="text-lg font-semibold">TriLink Technology LLC</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 TriLink Technology LLC. All rights reserved.</p>
              <p className="text-gray-400">IT Solutions for a Connected Future</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

