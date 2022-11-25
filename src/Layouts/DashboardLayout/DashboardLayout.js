import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import Navbar from '../../pages/Shared/Navbar/Navbar';
import './DashboardLayout.css';
const DashboardLayout = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className="drawer drawer-mobile ml-5">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					<Outlet></Outlet>
					<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
						Open drawer
					</label>
				</div>
				<div className="drawer-side  mr-3">
					<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
					<ul className="menu p-4 w-80 bg-base-100 text-base-content border border-primary rounded-xl text-left ">
						<li className="mb-3">
							<NavLink to={'/dashboard/myorders'} end>
								My Orders
							</NavLink>
						</li>
						<li className="mb-3">
							<NavLink to={'/dashboard/myproducts'}>My Products</NavLink>
						</li>
						<li className="mb-3">
							<NavLink to={'/dashboard/addproduct'}>My Products</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
