---
title: How to Create a Single Binary Web Application with Rust and React
date: "2026-09-09"
tags: [Rust, React]
summary: "Bundling a React frontend into a Rust binary so your entire web app ships as a single executable."
disabled: true
---

# How to Create a Single Binary Web Application with Rust and React

<!-- Why a single binary matters: simplified deployment, no separate static file server, self-contained artifact. Brief note on what the post covers and what it skips (serving and deployment). -->

Sometimes, you just want to have something running. It does not have to scale to bilions of users, but should handle a bit of traffic. It can be for something yu self host, or simply something running locally on your laptop.

In these cases, having a single binary that serves a static website is the perfect fit, and having a single binary also simplifies the deployment regardless of if you are hosting it using docker, or directly on the system.

## Project Structure

<!-- The monorepo layout: a Rust backend crate and a React frontend directory side by side. How the two fit together at build time. -->

In this post I will be using Rust and React

## The Build Pipeline

<!-- Tying it together: a Makefile or build script that builds the React frontend first, then compiles the Rust binary with the embedded assets. The key to a repeatable single-binary build. -->

## Embedding the Frontend

<!-- The core step: using a crate like rust-embed or include_dir to compile the React build output into the binary at build time. Walk through the macro/struct setup and how to serve embedded assets. -->

## Development Workflow

<!-- How to work locally during development: running the React dev server with HMR and the Rust backend separately, and how to fall back to the embedded assets for testing the production build. -->

## Conclusion

<!-- Recap of what was built, the trade-offs of the single-binary approach, and a teaser for the next post covering serving and deployment. -->
