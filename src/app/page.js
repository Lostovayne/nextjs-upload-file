"use client";
import Form from "@/components/Form";
import { useState } from "react";
import { Toaster, toast } from "sonner";

const HomePage = () => {
	const [file, setFile] = useState();
	const [name, setName] = useState("");
	const handleSubmit = async (e) => {
		toast.success("file uploaded successfully");
		e.preventDefault();
		if (!file) return;
		// file
		const form = new FormData();
		form.set("file", file);
		// sending file
		const res = await fetch("/api/upload", {
			method: "POST",
			body: form,
		});
		const data = await res.json();
		setFile(null);
		setName("");
	};
	const handleSelect = (e) => {
		setFile(e.target.files[0]);
	};

	return (
		<div>
			<Toaster richColors position="top-right" />
			<Form
				handleSelect={handleSelect}
				handleSubmit={handleSubmit}
				file={file}
				name={name}
			/>
		</div>
	);
};
export default HomePage;
