import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, ExternalLink } from 'lucide-react';

const ListUser = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const getUsers = () => {
        axios
            .get('https://reqres.in/api/users')
            .then((res) => {
                setUsers(res.data.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    useEffect(() => {
        getUsers();
    }, []);

    const isLoggedIn = localStorage.getItem('access_token');

    const handleLogout = () => {
        localStorage.clear();
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[linear-gradient(135deg,_#E8E8E8_0%,_#2E2E2E_100%)] relative">
            {/* Floating shapes background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 -left-48 -top-48 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute w-96 h-96 -right-48 top-1/2 bg-white/5 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <div className="relative backdrop-blur-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <h1 className="text-3xl font-bold text-white/90">List User</h1>
                        {isLoggedIn !== null && (
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300"
                            >
                                <LogOut size={20} />
                                <span>Logout</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* User Grid */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {users?.map((user) => (
                        <div
                            key={user.id}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500"
                        >
                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            
                            <div className="p-8">
                                <div className="flex flex-col items-center">
                                    <div className="relative">
                                        <img
                                            src={user.avatar}
                                            alt={`${user.first_name} ${user.last_name}`}
                                            className="w-32 h-32 rounded-full object-cover ring-4 ring-white/10 group-hover:ring-white/20 transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <div className="mt-6 text-center">
                                        <h3 className="text-xl font-bold text-white/90">
                                            {user.first_name} {user.last_name}
                                        </h3>
                                        <p className="mt-2 text-white/60">{user.email}</p>
                                        <Link
                                            to={`/single-user/${user.id}`}
                                            className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/90 transition-all duration-300"
                                        >
                                            <ExternalLink size={18} />
                                            <span>View Details</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListUser;