"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, BookOpen, GraduationCap } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-600">
          Manage your account settings and learning preferences
        </p>
      </div>

      {/* Profile Information */}
      <div className="bg-white rounded-lg border p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Personal Information
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-24 w-full">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
              <User className="w-12 h-12 text-gray-400" />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input placeholder="john@example.com" type="email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Phone
                </label>
                <Input placeholder="+1 (555) 000-0000" type="tel" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Location
                </label>
                <Input placeholder="New York, USA" />
              </div>
            </div>
            <Button className="bg-[#f46506] hover:bg-[#d55605]">
              Save Changes
            </Button>
          </div>
        </div>
      </div>

      {/* Learning Statistics */}
      <div className="bg-white rounded-lg border p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Learning Progress
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
            <div className="p-3 rounded-full bg-blue-100">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Enrolled Courses</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
            <div className="p-3 rounded-full bg-green-100">
              <GraduationCap className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold">8</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
            <div className="p-3 rounded-full bg-orange-100">
              <BookOpen className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">In Progress</p>
              <p className="text-2xl font-bold">4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
