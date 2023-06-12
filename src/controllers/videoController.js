import express from "express";

export const trending = (req, res) => res.render("home", { pageTitle: "Home" });
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search video");

export const upload = (req, res) => res.send("Upload video");
export const deleteVideo = (req, res) => {
  return res.send(`Delete video #${req.params.id}`);
};