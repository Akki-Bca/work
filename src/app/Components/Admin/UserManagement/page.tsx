"use client";

import { useState } from "react";
import { FiEdit, FiTrash2, FiSearch, FiChevronDown, FiChevronRight } from "react-icons/fi";

const usersData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Seller", status: "Inactive" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Buyer", status: "Active" },
  { id: 4, name: "Emily Davis", email: "emily@example.com", role: "Seller", status: "Active" },
  { id: 5, name: "Alice Brown", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 6, name: "Robert Wilson", email: "robert@example.com", role: "Buyer", status: "Inactive" },
  { id: 7, name: "Wenda Wilson", email: "robert@example.com", role: "Buyer", status: "Active" },
];

const UserManagement = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(usersData);
  const [expandedRoles, setExpandedRoles] = useState<{ [key: string]: boolean }>({
    Admin: true,
    Seller: true,
    Buyer: true,
  });

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const toggleRole = (role: string) => {
    setExpandedRoles((prev) => ({ ...prev, [role]: !prev[role] }));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const groupedUsers = filteredUsers.reduce((acc, user) => {
    if (!acc[user.role]) acc[user.role] = [];
    acc[user.role].push(user);
    return acc;
  }, {} as Record<string, typeof usersData>);

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold mb-4">👥 User Management</h2>

      {/* Search Bar */}
      <div className="flex items-center border rounded-lg px-3 py-2 mb-4">
        <FiSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search users..."
          className="ml-2 w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* User Sections by Role */}
      {Object.keys(groupedUsers).map((role) => (
        <div key={role} className="mb-6 border rounded-lg overflow-hidden">
          {/* Role Header */}
          <button
            className="w-full bg-gray-200 flex justify-between items-center p-3 font-semibold"
            onClick={() => toggleRole(role)}
          >
            {role}
            {expandedRoles[role] ? <FiChevronDown /> : <FiChevronRight />}
          </button>

          {/* User List */}
          {expandedRoles[role] && (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {groupedUsers[role].map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className={`p-3 font-semibold ${user.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                      {user.status}
                    </td>
                    <td className="p-3 flex justify-center space-x-3">
                      <button className="text-blue-500 hover:text-blue-700">
                        <FiEdit />
                      </button>
                      <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:text-red-700">
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserManagement;
