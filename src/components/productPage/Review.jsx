import React from "react";
import { Typography, Box } from "@mui/material";

const Review = () => {
  return (
    <div className="py-10">
      <Typography className="mb-5 text-lg font-semibold">
        Review for Samsung Galaxy Z Flip 3
      </Typography>

      <Box className="space-y-5 text-sm">
        <Typography>The Samsung Galaxy S23: An In-Depth Look</Typography>

        <Typography>
          The Galaxy S23, Samsung&apos;s latest flagship smartphone, is a
          feature and performance powerhouse. This device is a significant
          upgrade over the Galaxy S22 and includes some exciting new features
          that set it apart from the latest iPhone 14. In this article,
          we&apos;ll look at the Galaxy S23 in detail and compare it to the S22
          and iPhone 14.
        </Typography>

        <Typography>
          The Galaxy S23 has a sleek and stylish design and a 6.2-inch Dynamic
          AMOLED display with a resolution of 2400x1080. With a refresh rate of
          120Hz and HDR10+ certification, the device is an excellent choice for
          video and gaming. When it comes to battery life, the Galaxy S23 is
          expected to have a 4000mAh battery, which should provide users with
          enough power to get through the day. For added convenience, the device
          supports both fast charging and wireless charging. The Galaxy S23 has
          a triple camera setup on the back, with a 64MP main camera, a 12MP
          ultra-wide camera, and a 12MP telephoto camera. A 10MP selfie camera
          is located on the front. For stunning photos and videos, the camera
          has improved image stabilization and AI-powered image processing.
        </Typography>

        <Typography>
          New Features: The improved Bixby voice assistant, improved Samsung
          Pay, and improved Samsung Health app are among the new features in the
          Galaxy S23. The device also has a new &quot;My People&quot; feature
          that that lets you quickly connect with your favorite contacts.
        </Typography>

        <Typography>
          The Samsung Galaxy S23 is scheduled to be released in March 2023.
        </Typography>

        <Typography>Pros:</Typography>

        <ul className="space-y-5 list-disc list-inside">
          <li>enhanced design and display</li>
          <li>Long battery life</li>
          <li>Excellent camera quality</li>
          <li>Bixby and My People are two innovative new features.</li>
          <li>Fast and wireless charging are supported.</li>
        </ul>

        <Typography>Cons</Typography>

        <ul className="space-y-5 list-disc list-inside">
          <li>Priced slightly higher than the previous model.</li>
          <li>For new users, the learning curve may be steeper.</li>
          <li>Some features might not be available in all countries.</li>
        </ul>

        <Typography>
          Finally, the Samsung Galaxy S23 is an excellent choice for anyone
          seeking a high-quality smartphone with a long list of impressive
          features. Whether you&apos;re a gamer, a content creator, or simply
          looking for a user-friendly device, the Galaxy S23 is well worth
          considering.
        </Typography>
      </Box>
    </div>
  );
};

export default Review;
