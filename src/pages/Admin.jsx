import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  Calendar,
  CheckCircle,
  Download,
  Eye,
  Heart,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Sample data for dashboard
  const dashboardStats = [
    {
      title: "Pending Requests",
      value: "42",
      change: "+12%",
      icon: Calendar,
      color: "text-blue-600",
    },
    {
      title: "Total Animals",
      value: "1,257",
      change: "+8%",
      icon: Heart,
      color: "text-red-600",
    },
    {
      title: "Emergency Logs",
      value: "18",
      change: "-3%",
      icon: TrendingUp,
      color: "text-amber-600",
    },
    {
      title: "Active Doctors",
      value: "24",
      change: "+2",
      icon: Users,
      color: "text-green-600",
    },
  ];

  const monthlyData = [
    { month: "Jan", requests: 65, emergencies: 12 },
    { month: "Feb", requests: 59, emergencies: 15 },
    { month: "Mar", requests: 80, emergencies: 18 },
    { month: "Apr", requests: 81, emergencies: 14 },
    { month: "May", requests: 56, emergencies: 10 },
    { month: "Jun", requests: 55, emergencies: 9 },
    { month: "Jul", requests: 40, emergencies: 7 },
  ];

  const diseaseData = [
    { name: "Gastroenteritis", value: 35, color: "#3b82f6" },
    { name: "Dermatitis", value: 25, color: "#ef4444" },
    { name: "Arthritis", value: 15, color: "#f59e0b" },
    { name: "Dental Disease", value: 15, color: "#10b981" },
    { name: "Other", value: 10, color: "#6366f1" },
  ];

  const doctorRequests = [
    {
      id: "REQ-1234",
      owner: "John Smith",
      animal: "Dog (Golden Retriever)",
      symptoms: "Vomiting, lethargy, loss of appetite for 2 days",
      urgency: "High",
      date: "Aug 15, 2023",
      status: "Pending",
    },
    {
      id: "REQ-1235",
      owner: "Sarah Johnson",
      animal: "Cat (Maine Coon)",
      symptoms: "Limping on front right leg after fall",
      urgency: "Medium",
      date: "Aug 14, 2023",
      status: "Assigned",
    },
    {
      id: "REQ-1236",
      owner: "Michael Brown",
      animal: "Horse (Thoroughbred)",
      symptoms: "Coughing and nasal discharge",
      urgency: "Medium",
      date: "Aug 14, 2023",
      status: "In Progress",
    },
    {
      id: "REQ-1237",
      owner: "Emily Wilson",
      animal: "Rabbit (Dutch)",
      symptoms: "Not eating, lethargic behavior",
      urgency: "High",
      date: "Aug 13, 2023",
      status: "Completed",
    },
    {
      id: "REQ-1238",
      owner: "David Lee",
      animal: "Dog (Poodle)",
      symptoms: "Skin rash and itching",
      urgency: "Low",
      date: "Aug 13, 2023",
      status: "Pending",
    },
  ];

  const animalList = [
    {
      id: "ANI-5678",
      name: "Max",
      type: "Dog",
      breed: "Golden Retriever",
      age: "4 years",
      owner: "John Smith",
      lastVisit: "Aug 15, 2023",
      status: "Healthy",
    },
    {
      id: "ANI-5679",
      name: "Luna",
      type: "Cat",
      breed: "Maine Coon",
      age: "3 years",
      owner: "Sarah Johnson",
      lastVisit: "Aug 14, 2023",
      status: "Under Treatment",
    },
    {
      id: "ANI-5680",
      name: "Thunder",
      type: "Horse",
      breed: "Thoroughbred",
      age: "7 years",
      owner: "Michael Brown",
      lastVisit: "Aug 14, 2023",
      status: "Under Treatment",
    },
    {
      id: "ANI-5681",
      name: "Hopper",
      type: "Rabbit",
      breed: "Dutch",
      age: "1 year",
      owner: "Emily Wilson",
      lastVisit: "Aug 13, 2023",
      status: "Critical",
    },
    {
      id: "ANI-5682",
      name: "Bella",
      type: "Dog",
      breed: "Poodle",
      age: "6 years",
      owner: "David Lee",
      lastVisit: "Aug 13, 2023",
      status: "Healthy",
    },
  ];

  // Helper functions for badges
  const getStatusBadge = (status) => {
    const statusMap = {
      Pending: { color: "bg-yellow-100 text-yellow-800", text: "Pending" },
      Assigned: { color: "bg-blue-100 text-blue-800", text: "Assigned" },
      "In Progress": { color: "bg-purple-100 text-purple-800", text: "In Progress" },
      Completed: { color: "bg-green-100 text-green-800", text: "Completed" },
      Healthy: { color: "bg-green-100 text-green-800", text: "Healthy" },
      "Under Treatment": { color: "bg-blue-100 text-blue-800", text: "Under Treatment" },
      Critical: { color: "bg-red-100 text-red-800", text: "Critical" },
    };

    const badgeInfo = statusMap[status] || { color: "bg-gray-100 text-gray-800", text: status };

    return (
      <Badge className={`${badgeInfo.color} border-0`}>
        {badgeInfo.text}
      </Badge>
    );
  };

  const getUrgencyBadge = (urgency) => {
    const urgencyMap = {
      High: "bg-red-100 text-red-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Low: "bg-green-100 text-green-800",
    };

    return (
      <Badge className={`${urgencyMap[urgency] || "bg-gray-100 text-gray-800"} border-0`}>
        {urgency}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 border-r bg-white p-6 hidden md:block">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-600 text-sm mt-1">VetCare Pro Dashboard</p>
          </div>

          <nav className="space-y-2">
            <Button
              variant={activeTab === "dashboard" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("dashboard")}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            <Button
              variant={activeTab === "requests" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("requests")}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Requests
            </Button>
            <Button
              variant={activeTab === "animals" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("animals")}
            >
              <Heart className="w-4 h-4 mr-2" />
              Registered Animals
            </Button>
            <Button
              variant={activeTab === "reports" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("reports")}
            >
              <Download className="w-4 h-4 mr-2" />
              Reports
            </Button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
                <p className="text-gray-600">Monitor your veterinary practice performance</p>
              </div>

              {/* Stats Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, index) => (
                  <Card key={index} className="shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                          <p className={`text-sm ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                            {stat.change} from last month
                          </p>
                        </div>
                        <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center`}>
                          <stat.icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Charts */}
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle>Monthly Trends</CardTitle>
                    <CardDescription>Requests and emergency cases over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={monthlyData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="requests" stroke="#3b82f6" strokeWidth={3} name="Requests" />
                          <Line
                            type="monotone"
                            dataKey="emergencies"
                            stroke="#ef4444"
                            strokeWidth={3}
                            name="Emergencies"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle>Disease Distribution</CardTitle>
                    <CardDescription>Most common conditions treated</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={diseaseData}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {diseaseData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "requests" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Doctor Requests</h2>
                  <p className="text-gray-600">Manage home visit and consultation requests</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search requests..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="assigned">Assigned</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Requests Table */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Request ID</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Animal</TableHead>
                        <TableHead>Symptoms</TableHead>
                        <TableHead>Urgency</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {doctorRequests.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell className="font-medium">{request.id}</TableCell>
                          <TableCell>{request.owner}</TableCell>
                          <TableCell>{request.animal}</TableCell>
                          <TableCell className="max-w-xs truncate">{request.symptoms}</TableCell>
                          <TableCell>{getUrgencyBadge(request.urgency)}</TableCell>
                          <TableCell>{request.date}</TableCell>
                          <TableCell>{getStatusBadge(request.status)}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="w-3 h-3" />
                              </Button>
                              {request.status === "Pending" && (
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  <CheckCircle className="w-3 h-3" />
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "animals" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Registered Animals</h2>
                  <p className="text-gray-600">View and manage animal records</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Export List
                </Button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search animals..." className="pl-10" />
              </div>

              {/* Animals Table */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Animal ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Breed</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Last Visit</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {animalList.map((animal) => (
                        <TableRow key={animal.id}>
                          <TableCell className="font-medium">{animal.id}</TableCell>
                          <TableCell>{animal.name}</TableCell>
                          <TableCell>{animal.type}</TableCell>
                          <TableCell>{animal.breed}</TableCell>
                          <TableCell>{animal.age}</TableCell>
                          <TableCell>{animal.owner}</TableCell>
                          <TableCell>{animal.lastVisit}</TableCell>
                          <TableCell>{getStatusBadge(animal.status)}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline">
                                Edit
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h2>
                <p className="text-gray-600">Generate and download comprehensive reports</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Monthly Report</h3>
                        <p className="text-sm text-gray-600">Complete monthly analytics</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Heart className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Animal Health Report</h3>
                        <p className="text-sm text-gray-600">Health statistics and trends</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Doctor Performance</h3>
                        <p className="text-sm text-gray-600">Veterinarian activity report</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}