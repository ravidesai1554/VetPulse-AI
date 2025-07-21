import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Plus,
  Search,
  Calendar,
  FileText,
  Activity,
  Heart,
  Stethoscope,
  Pill,
  Syringe,
  AlertTriangle,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  ArrowLeft,
} from "lucide-react";

// Available animal types
const animalTypes = [
  { value: "dog", label: "🐕 Dog", emoji: "🐕" },
  { value: "cat", label: "🐱 Cat", emoji: "🐱" },
  { value: "cow", label: "🐄 Cow", emoji: "🐄" },
  { value: "horse", label: "🐎 Horse", emoji: "🐎" },
  { value: "rabbit", label: "🐰 Rabbit", emoji: "🐰" },
  { value: "sheep", label: "🐑 Sheep", emoji: "🐑" },
  { value: "goat", label: "🐐 Goat", emoji: "🐐" },
  { value: "pig", label: "🐷 Pig", emoji: "🐷" },
];

// Sample health records data
const sampleRecords = [
  {
    id: 1,
    animalName: "Buddy",
    animalType: "dog",
    breed: "Golden Retriever",
    age: "3 years",
    lastVisit: "2024-01-10",
    status: "Healthy",
    nextAppointment: "2024-02-15",
    vaccinations: ["Rabies", "DHPP", "Bordetella"],
    treatments: ["Flea Prevention", "Heartworm Prevention"],
  },
  {
    id: 2,
    animalName: "Whiskers",
    animalType: "cat",
    breed: "Persian",
    age: "5 years",
    lastVisit: "2024-01-05",
    status: "Under Treatment",
    nextAppointment: "2024-01-20",
    vaccinations: ["FVRCP", "Rabies"],
    treatments: ["Upper Respiratory Infection Treatment"],
  },
  {
    id: 3,
    animalName: "Bessie",
    animalType: "cow",
    breed: "Holstein",
    age: "4 years",
    lastVisit: "2023-12-20",
    status: "Healthy",
    nextAppointment: "2024-02-20",
    vaccinations: ["IBR/BVD", "Clostridial"],
    treatments: ["Routine Hoof Care"],
  },
];

export default function HealthRecords() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterAnimalType, setFilterAnimalType] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const filteredRecords = sampleRecords.filter((record) => {
    const matchesSearch =
      record.animalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || record.status.toLowerCase().includes(filterStatus.toLowerCase());
    const matchesType = filterAnimalType === "all" || record.animalType === filterAnimalType;

    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "healthy":
        return "bg-green-100 text-green-800";
      case "under treatment":
        return "bg-yellow-100 text-yellow-800";
      case "critical":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getAnimalEmoji = (type) => {
    const animal = animalTypes.find((a) => a.value === type);
    return animal ? animal.emoji : "🐾";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20">
      {/* Content starts below the global navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Health Records
          </h1>

          <div className="flex items-center space-x-4">
            <Badge className="bg-green-100 text-green-800">
              <Activity className="w-3 h-3 mr-1" />
              Records Active
            </Badge>
            <Button variant="outline" size="sm" asChild>
              <Link to="/" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-8 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg text-gray-600">Manage comprehensive health records for all your animals</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link to="/register-animal">
                    <Plus className="w-4 h-4 mr-2" />
                    Register New Animal
                  </Link>
                </Button>
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Record
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Add New Health Record</DialogTitle>
                      <DialogDescription>Create a new health record entry for an existing animal.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="animal-select">Select Animal</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose an animal" />
                          </SelectTrigger>
                          <SelectContent>
                            {sampleRecords.map((record) => (
                              <SelectItem key={record.id} value={record.id.toString()}>
                                {getAnimalEmoji(record.animalType)} {record.animalName} - {record.breed}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="record-type">Record Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select record type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="checkup">Regular Checkup</SelectItem>
                            <SelectItem value="vaccination">Vaccination</SelectItem>
                            <SelectItem value="treatment">Treatment</SelectItem>
                            <SelectItem value="surgery">Surgery</SelectItem>
                            <SelectItem value="emergency">Emergency Visit</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsAddDialogOpen(false)}>Create Record</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Animals</p>
                    <p className="text-3xl font-bold text-gray-900">{sampleRecords.length}</p>
                  </div>
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Healthy</p>
                    <p className="text-3xl font-bold text-green-600">
                      {sampleRecords.filter((r) => r.status === "Healthy").length}
                    </p>
                  </div>
                  <Stethoscope className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Under Treatment</p>
                    <p className="text-3xl font-bold text-yellow-600">
                      {sampleRecords.filter((r) => r.status === "Under Treatment").length}
                    </p>
                  </div>
                  <Pill className="w-8 h-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Due Appointments</p>
                    <p className="text-3xl font-bold text-purple-600">2</p>
                  </div>
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search by name or breed..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full md:w-64"
                    />
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="healthy">Healthy</SelectItem>
                      <SelectItem value="under treatment">Under Treatment</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={filterAnimalType} onValueChange={setFilterAnimalType}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Filter by animal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Animals</SelectItem>
                      {animalTypes.map((animal) => (
                        <SelectItem key={animal.value} value={animal.value}>
                          {animal.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Import
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Health Records Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Health Records ({filteredRecords.length})
              </CardTitle>
              <CardDescription>Complete health history and management for all registered animals</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Animal</TableHead>
                    <TableHead>Type & Breed</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Visit</TableHead>
                    <TableHead>Next Appointment</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{getAnimalEmoji(record.animalType)}</div>
                          <span>{record.animalName}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium capitalize">{record.animalType}</div>
                          <div className="text-sm text-gray-600">{record.breed}</div>
                        </div>
                      </TableCell>
                      <TableCell>{record.age}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(record.status)}>{record.status}</Badge>
                      </TableCell>
                      <TableCell>{record.lastVisit}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span>{record.nextAppointment}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Syringe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Vaccination Scheduler</h3>
                <p className="text-gray-600 mb-4">Schedule and track vaccinations for all animals</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Manage Vaccinations
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Emergency Contacts</h3>
                <p className="text-gray-600 mb-4">Quick access to emergency veterinary services</p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link to="/emergency">Emergency Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Activity className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Health Analytics</h3>
                <p className="text-gray-600 mb-4">View health trends and analytics reports</p>
                <Button variant="outline" className="w-full bg-transparent">
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Resources Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Health Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-blue-600" />
                    Veterinary Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <Link to="/resources/vaccination-schedules" className="text-blue-600 hover:underline">
                        Vaccination Schedules by Species
                      </Link>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <Link to="/resources/emergency-care" className="text-blue-600 hover:underline">
                        Emergency Care Guidelines
                      </Link>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <Link to="/resources/nutrition-guides" className="text-blue-600 hover:underline">
                        Nutrition Guidelines
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-600" />
                    Health Management Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <Link to="/admin" className="text-red-600 hover:underline">
                        Practice Management Dashboard
                      </Link>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <Link to="/veterinarians" className="text-red-600 hover:underline">
                        Find Certified Veterinarians
                      </Link>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <Link to="/diagnosis" className="text-red-600 hover:underline">
                        AI Health Assessment Tool
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}