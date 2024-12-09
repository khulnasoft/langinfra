---
title: GCP
sidebar_position: 3
slug: /deployment-gcp
---

# Deploy on Google Cloud Platform

To deploy Langinfra on Google Cloud Platform using Cloud Shell, use the below script.
The script will guide you through setting up a Debian-based VM with the Langinfra package, Nginx, and the necessary configurations to run the Langinfra dev environment in GCP.

## Prerequisites

* A GCP account with the necessary permissions to create resources
* A project on GCP where you want to deploy Langinfra

## Deploy Langinfra in GCP

1. Click below to launch Cloud Shell.

[![GCP Deploy](/logos/cloud_deploy.svg) Deploy to Google Cloud](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/khulnasoft/langinfra&working_dir=scripts/gcp&shellonly=true&tutorial=walkthroughtutorial.md)

2. Click **Trust repo**. Some gcloud commands might not run in an ephemeral Cloud Shell environment.
3. Click **Start** and follow the tutorial to deploy Langinfra.

## Spot/Preemptible Instance

When running a [spot (preemptible) instance](https://cloud.google.com/compute/docs/instances/preemptible), the code and VM will behave the same way as in a regular instance, executing the startup script to configure the environment, install necessary dependencies, and run the Langinfra application. However, **due to the nature of spot instances, the VM may be terminated at any time if Google Cloud needs to reclaim the resources**. This makes spot instances suitable for fault-tolerant, stateless, or interruptible workloads that can handle unexpected terminations and restarts.

## Pricing (approximate)

:::info

For more information, see the [GCP Pricing Calculator](https://cloud.google.com/products/calculator?hl=en).

:::


| Component          | Regular Cost (Hourly) | Regular Cost (Monthly) | Spot/Preemptible Cost (Hourly) | Spot/Preemptible Cost (Monthly) | Notes                                                                      |
| ------------------ | --------------------- | ---------------------- | ------------------------------ | ------------------------------- | -------------------------------------------------------------------------- |
| 100 GB Disk        | -                     | $10/month              | -                              | $10/month                       | Disk cost remains the same for both regular and Spot/Preemptible VMs       |
| VM (n1-standard-4) | $0.15/hr              | ~$108/month            | ~$0.04/hr                      | ~$29/month                      | The VM cost can be significantly reduced using a Spot/Preemptible instance |
| **Total**          | **$0.15/hr**          | **~$118/month**        | **~$0.04/hr**                  | **~$39/month**                  | Total costs for running the VM and disk 24/7 for an entire month           |
